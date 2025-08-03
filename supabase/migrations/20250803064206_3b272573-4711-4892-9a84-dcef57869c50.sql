-- Update the webhook URL in the existing trigger function
CREATE OR REPLACE FUNCTION public.notify_account_insert()
RETURNS trigger
LANGUAGE plpgsql
AS $function$
BEGIN
    PERFORM net.http_post(
        'https://n8n.huhsame.com/webhook-test/account-insert',
        json_build_object(
            'account_id', NEW.account_id,
            'account_password', NEW.account_password,
            'server_name', NEW.server_name
        )::text,
        '{"Content-Type": "application/json"}'
    );
    
    RETURN NEW;
END;
$function$