-- Drop the existing trigger first
DROP TRIGGER IF EXISTS account_insert_trigger ON public.user_accounts;

-- Drop the problematic functions that reference the non-existent net extension
DROP FUNCTION IF EXISTS public.notify_user_account_insert();
DROP FUNCTION IF EXISTS public.notify_account_insert();

-- Create a trigger on user_accounts table to use the working log function
CREATE TRIGGER user_accounts_insert_trigger
    AFTER INSERT ON public.user_accounts
    FOR EACH ROW
    EXECUTE FUNCTION public.log_account_insert();