-- Fix critical security vulnerability in user_accounts table

-- Step 1: Add user_id column to associate records with authenticated users
ALTER TABLE public.user_accounts 
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Step 2: Drop the insecure RLS policy that allows all users to see all records
DROP POLICY IF EXISTS "Users can view their own records" ON public.user_accounts;

-- Step 3: Create secure RLS policy that only allows users to see their own records
CREATE POLICY "Users can view their own accounts only" 
ON public.user_accounts 
FOR SELECT 
USING (auth.uid() = user_id);

-- Step 4: Update the insert policy to ensure user_id is set correctly
DROP POLICY IF EXISTS "Allow public insert" ON public.user_accounts;

CREATE POLICY "Users can insert their own accounts" 
ON public.user_accounts 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Step 5: Add update policy for users to modify their own records
CREATE POLICY "Users can update their own accounts" 
ON public.user_accounts 
FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Step 6: Add delete policy for users to delete their own records
CREATE POLICY "Users can delete their own accounts" 
ON public.user_accounts 
FOR DELETE 
USING (auth.uid() = user_id);

-- Step 7: Create index for better performance on user_id lookups
CREATE INDEX IF NOT EXISTS idx_user_accounts_user_id ON public.user_accounts(user_id);