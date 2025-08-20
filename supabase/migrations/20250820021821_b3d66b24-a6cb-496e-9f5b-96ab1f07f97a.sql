-- Fix function search path security warnings

-- Step 1: Update hash_password function with secure search_path
CREATE OR REPLACE FUNCTION public.hash_password(password TEXT)
RETURNS TEXT 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN crypt(password, gen_salt('bf'));
END;
$$;

-- Step 2: Update verify_password function with secure search_path
CREATE OR REPLACE FUNCTION public.verify_password(password TEXT, hash TEXT)
RETURNS BOOLEAN 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN hash = crypt(password, hash);
END;
$$;

-- Step 3: Update update_account_password function with secure search_path
CREATE OR REPLACE FUNCTION public.update_account_password(
  account_id_param TEXT,
  new_password TEXT
)
RETURNS BOOLEAN 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.user_accounts 
  SET account_password = public.hash_password(new_password)
  WHERE account_id = account_id_param 
  AND user_id = auth.uid();
  
  RETURN FOUND;
END;
$$;