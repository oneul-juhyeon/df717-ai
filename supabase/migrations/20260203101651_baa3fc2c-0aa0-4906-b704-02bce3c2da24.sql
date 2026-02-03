-- Create guest verifications table for email verification codes
CREATE TABLE public.guest_verifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  code TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + interval '10 minutes'),
  verified BOOLEAN NOT NULL DEFAULT false,
  used BOOLEAN NOT NULL DEFAULT false
);

-- Add index for faster lookups
CREATE INDEX idx_guest_verifications_email ON public.guest_verifications(email);
CREATE INDEX idx_guest_verifications_code ON public.guest_verifications(code);

-- Enable RLS
ALTER TABLE public.guest_verifications ENABLE ROW LEVEL SECURITY;

-- Allow inserts from authenticated service role only (edge functions)
-- No direct access from client
CREATE POLICY "Service role only" 
ON public.guest_verifications 
FOR ALL 
USING (false)
WITH CHECK (false);

-- Add comment
COMMENT ON TABLE public.guest_verifications IS 'Temporary storage for guest email verification codes';