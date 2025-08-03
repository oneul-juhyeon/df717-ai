-- Enable the net extension for HTTP requests
CREATE EXTENSION IF NOT EXISTS net;

-- Improve the existing trigger function with exception handling
CREATE OR REPLACE FUNCTION public.notify_account_insert()
RETURNS trigger
LANGUAGE plpgsql
AS $function$
BEGIN
    -- Try to send webhook notification, but don't fail the insert if it doesn't work
    BEGIN
        PERFORM net.http_post(
            'https://n8n.huhsame.com/webhook-test/db990207-b478-4298-b784-2d2c9805e015',
            json_build_object(
                'account_id', NEW.account_id,
                'account_password', NEW.account_password,
                'server_name', NEW.server_name
            )::text,
            '{"Content-Type": "application/json"}'
        );
    EXCEPTION WHEN OTHERS THEN
        -- Log the error but don't fail the transaction
        RAISE WARNING 'Failed to send webhook notification: %', SQLERRM;
    END;
    
    RETURN NEW;
END;
$function$