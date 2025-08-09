-- Add email and phone columns to user_accounts table
ALTER TABLE public.user_accounts 
ADD COLUMN email text,
ADD COLUMN phone text;

-- Add comments for clarity
COMMENT ON COLUMN public.user_accounts.email IS 'User email address';
COMMENT ON COLUMN public.user_accounts.phone IS 'User phone number';