import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const TestWebhook: React.FC = () => {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<string>('');

  const testEdgeFunction = async () => {
    setTesting(true);
    setResult('');
    console.log('=== EDGE FUNCTION TEST STARTING ===');
    
    try {
      const testPayload = {
        account_id: '12345',
        account_password: 'test123',
        server_name: 'ICMarkets-Demo01'
      };
      
      console.log('Testing with payload:', { ...testPayload, account_password: '[REDACTED]' });
      
      const { data, error } = await supabase.functions.invoke('send-account-webhook', {
        body: testPayload
      });
      
      console.log('Edge function response:', { data, error });
      
      if (error) {
        setResult(`❌ Error: ${error.message}\n\nDetails: ${JSON.stringify(error, null, 2)}`);
      } else {
        setResult(`✅ Success!\n\nResponse: ${JSON.stringify(data, null, 2)}`);
      }
    } catch (exception) {
      console.error('Exception during test:', exception);
      setResult(`❌ Exception: ${exception.message}\n\nStack: ${exception.stack}`);
    } finally {
      setTesting(false);
    }
  };

  const testDirectHttpCall = async () => {
    setTesting(true);
    setResult('');
    console.log('=== DIRECT HTTP TEST STARTING ===');
    
    try {
      const testPayload = {
        account_id: '12345',
        account_password: 'test123',
        server_name: 'ICMarkets-Demo01'
      };
      
      const functionUrl = 'https://xvvfguvqeyymquhihkim.supabase.co/functions/v1/send-account-webhook';
      console.log('Testing direct HTTP call to:', functionUrl);
      
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2dmZndXZxZXl5bXF1aGloa2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMDQ3OTksImV4cCI6MjA2OTY4MDc5OX0.gHv95naHOic2A_00ADJd0pwAtq2nPxdLw0V7XThrWM4`,
        },
        body: JSON.stringify(testPayload)
      });
      
      console.log('HTTP Response status:', response.status);
      console.log('HTTP Response headers:', Object.fromEntries(response.headers.entries()));
      
      const responseText = await response.text();
      console.log('HTTP Response body:', responseText);
      
      if (response.ok) {
        setResult(`✅ Direct HTTP Success! Status: ${response.status}\n\nResponse: ${responseText}`);
      } else {
        setResult(`❌ Direct HTTP Failed! Status: ${response.status}\n\nResponse: ${responseText}`);
      }
    } catch (exception) {
      console.error('Exception during direct HTTP test:', exception);
      setResult(`❌ HTTP Exception: ${exception.message}`);
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Webhook Test Page</h1>
      
      <div className="space-y-4 mb-8">
        <button
          onClick={testEdgeFunction}
          disabled={testing}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {testing ? 'Testing Supabase Client...' : 'Test Edge Function (Supabase Client)'}
        </button>
        
        <button
          onClick={testDirectHttpCall}
          disabled={testing}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 ml-4"
        >
          {testing ? 'Testing Direct HTTP...' : 'Test Edge Function (Direct HTTP)'}
        </button>
      </div>
      
      {result && (
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Test Result:</h3>
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      )}
      
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Open browser developer tools (F12)</li>
          <li>Go to the Console tab</li>
          <li>Click either test button above</li>
          <li>Watch the console logs for detailed debugging information</li>
          <li>Check the Network tab to see if HTTP requests are being made</li>
        </ol>
      </div>
      
      <div className="mt-8">
        <a 
          href="/get-started" 
          className="text-blue-500 hover:underline"
        >
          ← Back to Get Started
        </a>
      </div>
    </div>
  );
};

export default TestWebhook;