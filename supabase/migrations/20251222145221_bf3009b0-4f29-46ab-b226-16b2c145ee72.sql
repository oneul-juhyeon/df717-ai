-- Add country_code column to user_accounts table
ALTER TABLE public.user_accounts 
ADD COLUMN IF NOT EXISTS country_code text;