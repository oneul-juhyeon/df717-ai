-- Update the orders product_type check constraint to include monthly subscription type
ALTER TABLE public.orders DROP CONSTRAINT IF EXISTS orders_product_type_check;

ALTER TABLE public.orders ADD CONSTRAINT orders_product_type_check 
CHECK (product_type IN ('light', 'premium', 'dap-premium', 'dap-premium-monthly'));