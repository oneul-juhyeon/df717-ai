-- Fix security warnings by setting proper search_path for all functions
CREATE OR REPLACE FUNCTION public.notify_user_account_insert()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
DECLARE
    webhook_url TEXT := 'https://your-n8n-instance.com/webhook/user-account-insert';
    payload JSON;
BEGIN
    -- 새로 삽입된 데이터를 JSON으로 구성
    payload := row_to_json(NEW);
    
    -- HTTP POST 요청으로 webhook 호출
    PERFORM net.http_post(
        url := webhook_url,
        body := payload::text,
        headers := '{"Content-Type": "application/json"}'::jsonb
    );
    
    RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.notify_account_insert()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
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
$function$;

CREATE OR REPLACE FUNCTION public.log_account_insert()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
    -- Just log that an account was inserted
    RAISE NOTICE 'New account inserted: account_id=%, server_name=%', NEW.account_id, NEW.server_name;
    RETURN NEW;
END;
$function$