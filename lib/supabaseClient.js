import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fvmdiiwsaidhoilmrztb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2bWRpaXdzYWlkaG9pbG1yenRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0ODUzMzksImV4cCI6MjA1ODA2MTMzOX0.XzR3sZcZTsUhYjO9r8Q3-mcNc4FpL6ERXfx165_wN-c';

export const supabase = createClient(supabaseUrl, supabaseKey);
