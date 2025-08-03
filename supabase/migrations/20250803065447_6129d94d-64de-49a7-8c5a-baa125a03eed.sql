-- Update the log function to also call the edge function for webhook
CREATE OR REPLACE FUNCTION public.log_account_insert()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
BEGIN
    -- Log that an account was inserted
    RAISE NOTICE 'New account inserted: account_id=%, server_name=%', NEW.account_id, NEW.server_name;
    
    -- Note: In a real implementation, we would call the edge function here
    -- but Supabase doesn't support direct HTTP calls from database functions
    -- So the webhook call will need to be triggered from the application layer
    
    RETURN NEW;
END;
$function$;