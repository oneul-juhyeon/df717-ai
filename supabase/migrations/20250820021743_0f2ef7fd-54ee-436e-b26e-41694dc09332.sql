-- Fix critical password security vulnerability in user_accounts table

-- Step 1: Enable pgcrypto extension for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Step 2: Add new column for hashed passwords
ALTER TABLE public.user_accounts 
ADD COLUMN account_password_hash TEXT;

-- Step 3: Create function to hash passwords using bcrypt
CREATE OR REPLACE FUNCTION public.hash_password(password TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN crypt(password, gen_salt('bf'));
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 4: Migrate existing plaintext passwords to hashed versions
UPDATE public.user_accounts 
SET account_password_hash = public.hash_password(account_password)
WHERE account_password IS NOT NULL;

-- Step 5: Drop the insecure plaintext password column
ALTER TABLE public.user_accounts 
DROP COLUMN account_password;

-- Step 6: Rename the hashed password column to replace the old one
ALTER TABLE public.user_accounts 
RENAME COLUMN account_password_hash TO account_password;

-- Step 7: Make the password column NOT NULL (since it was originally NOT NULL)
ALTER TABLE public.user_accounts 
ALTER COLUMN account_password SET NOT NULL;

-- Step 8: Create function to verify passwords
CREATE OR REPLACE FUNCTION public.verify_password(password TEXT, hash TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN hash = crypt(password, hash);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 9: Create function for secure password updates
CREATE OR REPLACE FUNCTION public.update_account_password(
  account_id_param TEXT,
  new_password TEXT
)
RETURNS BOOLEAN AS $$
BEGIN
  UPDATE public.user_accounts 
  SET account_password = public.hash_password(new_password)
  WHERE account_id = account_id_param 
  AND user_id = auth.uid();
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;