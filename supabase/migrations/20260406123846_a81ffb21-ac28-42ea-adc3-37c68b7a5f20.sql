CREATE POLICY "Authenticated users can read contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (true);