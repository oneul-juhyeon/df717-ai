-- Fix hash_password function with explicit type casting
CREATE OR REPLACE FUNCTION public.hash_password(password text)
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN crypt(password, gen_salt('bf'::text));
END;
$function$;