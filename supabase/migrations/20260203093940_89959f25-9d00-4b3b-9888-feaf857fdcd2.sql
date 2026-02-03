-- Fix overly permissive UPDATE policy - restrict to service role only
DROP POLICY IF EXISTS "Service role can update orders" ON public.orders;

-- Create a proper update policy that checks authenticated users can only update their own orders
-- or service role for payment confirmations (handled via edge function with service role key)
CREATE POLICY "Authenticated users can update their own orders" 
ON public.orders 
FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);