import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://gchmxhzemggnfmeqqdxl.supabase.co"
const supabaseAnonKey = "TUeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjaG14aHplbWdnbmZtZXFxZHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNjYzOTksImV4cCI6MjA3MjY0MjM5OX0.DkdINEmy0aBPUaaC8Lm4vewi9Ghp9QqqZOcDQtiVEBk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
