-- Add user_name and referrer_name columns to user_accounts table
ALTER TABLE public.user_accounts 
ADD COLUMN user_name TEXT,
ADD COLUMN referrer_name TEXT;