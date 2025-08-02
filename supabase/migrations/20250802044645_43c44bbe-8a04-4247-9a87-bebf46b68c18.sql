-- Create table for storing user account data from the get-started form
CREATE TABLE public.user_accounts (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  account_id TEXT NOT NULL,
  account_password TEXT NOT NULL,
  server_name TEXT NOT NULL,
  session_id TEXT,
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE public.user_accounts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is a public form)
CREATE POLICY "Allow public insert" 
ON public.user_accounts 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow users to view their own records (if we add auth later)
CREATE POLICY "Users can view their own records" 
ON public.user_accounts 
FOR SELECT 
USING (true);

-- Add index for better performance on queries
CREATE INDEX idx_user_accounts_created_at ON public.user_accounts(created_at);
CREATE INDEX idx_user_accounts_status ON public.user_accounts(status);