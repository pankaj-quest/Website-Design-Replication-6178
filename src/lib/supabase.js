import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://itelkohitrolzrkabxye.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ZWxrb2hpdHJvbHpya2FieHllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1ODMzMTAsImV4cCI6MjA2NTE1OTMxMH0.e-JZU6Ez5vOlwzFvHbp0pcUCqHTqjq_6-kgkeWtZ4WI'

if(SUPABASE_URL === 'https://<PROJECT-ID>.supabase.co' || SUPABASE_ANON_KEY === '<ANON_KEY>') {
  throw new Error('Missing Supabase variables');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})

export default supabase