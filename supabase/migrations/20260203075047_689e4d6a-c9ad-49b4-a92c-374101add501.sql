-- Drop the existing check constraint and add new one with dap-premium
ALTER TABLE public.orders DROP CONSTRAINT orders_product_type_check;

ALTER TABLE public.orders ADD CONSTRAINT orders_product_type_check 
CHECK (product_type = ANY (ARRAY['light'::text, 'premium'::text, 'dap-premium'::text]));