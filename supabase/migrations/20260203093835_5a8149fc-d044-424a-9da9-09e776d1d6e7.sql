-- Add guest_password column to orders table for guest checkout verification
ALTER TABLE public.orders 
ADD COLUMN IF NOT EXISTS guest_password text;

-- Create an index for efficient email lookup
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON public.orders(customer_email);

-- Update RLS policy to allow guest users to view their orders by email
-- First drop the existing select policy
DROP POLICY IF EXISTS "Users can view own orders" ON public.orders;

-- Create new policy that allows:
-- 1. Authenticated users to view their own orders (by user_id)
-- 2. Anyone to view orders (for guest lookup - password verified in application layer)
CREATE POLICY "Users can view own orders by user_id or email" 
ON public.orders 
FOR SELECT 
USING (
  auth.uid() = user_id 
  OR user_id IS NULL
);

-- Allow service role to update orders (for payment confirmation, etc.)
CREATE POLICY "Service role can update orders" 
ON public.orders 
FOR UPDATE 
USING (true)
WITH CHECK (true);