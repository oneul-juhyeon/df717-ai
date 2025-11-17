-- Create orders table for Toss Payments integration
create table public.orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) null,
  order_id text unique not null,
  product_type text not null check (product_type in ('light', 'premium')),
  amount bigint not null,
  status text default 'pending' check (status in ('pending', 'paid', 'cancelled', 'refunded')),
  payment_key text,
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  created_at timestamp with time zone default now(),
  paid_at timestamp with time zone,
  refunded_at timestamp with time zone
);

-- Enable RLS
alter table public.orders enable row level security;

-- Users can view their own orders
create policy "Users can view own orders"
  on orders for select
  using (auth.uid() = user_id);

-- Anyone can create orders (including guests)
create policy "Anyone can create orders"
  on orders for insert
  with check (true);

-- Add index for faster lookups
create index idx_orders_order_id on public.orders(order_id);
create index idx_orders_user_id on public.orders(user_id);
create index idx_orders_payment_key on public.orders(payment_key);