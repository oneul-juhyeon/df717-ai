UPDATE auth.users 
SET raw_user_meta_data = raw_user_meta_data || '{"phone": "01011111111"}'::jsonb 
WHERE id = '7e7ca0bd-0798-46a9-ad89-09a8b76084d1';