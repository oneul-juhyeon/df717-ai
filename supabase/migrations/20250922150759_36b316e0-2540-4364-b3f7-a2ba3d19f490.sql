-- First add unique constraint on account_id
ALTER TABLE public.user_accounts ADD CONSTRAINT user_accounts_account_id_unique UNIQUE (account_id);

-- Then backfill missing user accounts from Telegram data
INSERT INTO public.user_accounts (account_id, account_password, server_name, user_name, referrer_name, status, created_at)
VALUES 
  ('44909615', public.hash_password('tqen07'), 'ICMarketsSC-Demo04', '장아현', '박주현', 'active', '2025-08-23 18:23:00+09'),
  ('44923019', public.hash_password('vkti87'), 'ICMarketsSC-Demo04', '이승환', '박주현', 'active', '2025-09-21 00:13:00+09'),
  ('44923065', public.hash_password('hefr32'), 'ICMarketsSC-Demo04', '안태현', '주현영', 'active', '2025-09-21 01:41:00+09'),
  ('44923067', public.hash_password('eqru23'), 'ICMarketsSC-Demo04', '문태민', '주현영', 'active', '2025-09-21 01:47:00+09'),
  ('444923070', public.hash_password('ndss76'), 'ICMarketsSC-Demo04', '이상구', '주현영', 'active', '2025-09-21 01:47:00+09'),
  ('44923068', public.hash_password('cpry83'), 'ICMarketsSC-Demo04', 'Kim haewuon', '주현영', 'active', '2025-09-21 01:48:00+09'),
  ('44923073', public.hash_password('wwdm65'), 'ICMarketsSC-Demo04', '고정욱', '주현영', 'active', '2025-09-21 01:48:00+09'),
  ('44923071', public.hash_password('kpix32'), 'ICMarketsSC-Demo04', '서동희', null, 'active', '2025-09-21 01:48:00+09'),
  ('44923074', public.hash_password('fhev21'), 'ICMarketsSC-Demo04', '백성욱', '주현영', 'active', '2025-09-21 01:51:00+09'),
  ('44923072', public.hash_password('omws74'), 'ICMarketsSC-Demo04', '김문수', '주현영', 'active', '2025-09-21 01:54:00+09')
ON CONFLICT (account_id) DO NOTHING;