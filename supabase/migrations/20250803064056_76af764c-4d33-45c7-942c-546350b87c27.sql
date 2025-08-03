-- Remove the problematic trigger function and create a safer version
DROP FUNCTION IF EXISTS public.notify_account_insert() CASCADE;

-- Create a simple function that just logs the data insertion
-- We'll handle webhook notifications through Edge Functions instead
CREATE OR REPLACE FUNCTION public.log_account_insert()
RETURNS trigger
LANGUAGE plpgsql
AS $function$
BEGIN
    -- Just log that an account was inserted
    RAISE NOTICE 'New account inserted: account_id=%, server_name=%', NEW.account_id, NEW.server_name;
    RETURN NEW;
END;
$function$

-- Create the trigger to use the new function
CREATE TRIGGER account_insert_trigger
    AFTER INSERT ON public.user_accounts
    FOR EACH ROW
    EXECUTE FUNCTION public.log_account_insert();