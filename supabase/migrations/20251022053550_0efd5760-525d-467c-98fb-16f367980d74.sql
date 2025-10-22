-- Make account_password and server_name nullable for live accounts
ALTER TABLE public.user_accounts 
ALTER COLUMN account_password DROP NOT NULL,
ALTER COLUMN server_name DROP NOT NULL;