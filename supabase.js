const { createClient } = supabase;
const supabaseUrl = "https://slargmpgjicccajeaadh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsYXJnbXBnamljY2NhamVhYWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNDk5NjksImV4cCI6MjA3MTYyNTk2OX0.uEEhnWEN5loqT1x8fNnKHaYjb8EhXw5t3S6cxWYvIEw"; // Use service_role key only on backend
const supabase = createClient(supabaseUrl, supabaseKey);
