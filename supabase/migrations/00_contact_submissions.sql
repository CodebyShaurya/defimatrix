-- Drop existing table and its dependencies
DROP TABLE IF EXISTS public.contact_submissions CASCADE;

-- Drop existing function if it exists
DROP FUNCTION IF EXISTS public.handle_updated_at();

-- Create the function
CREATE FUNCTION public.handle_updated_at()
RETURNS trigger AS $$
BEGIN
  new.updated_at = now();
  RETURN new;
END;
$$ LANGUAGE plpgsql;

-- Create the table
CREATE TABLE public.contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  phone text,
  project_type text NOT NULL,
  budget text,
  description text NOT NULL,
  hear_about_us text,
  email_status text DEFAULT 'pending' NOT NULL,
  email_error text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow only authenticated users to view submissions
CREATE POLICY "Allow authenticated users to view submissions"
  ON public.contact_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow anyone to insert submissions
CREATE POLICY "Allow anyone to insert submissions"
  ON public.contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create updated_at trigger
CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at(); 