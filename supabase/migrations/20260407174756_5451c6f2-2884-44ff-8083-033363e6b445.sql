
ALTER TABLE public.contact_messages ADD COLUMN is_read boolean NOT NULL DEFAULT false;

CREATE POLICY "Authenticated users can update contact messages"
ON public.contact_messages
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete contact messages"
ON public.contact_messages
FOR DELETE
TO authenticated
USING (true);
