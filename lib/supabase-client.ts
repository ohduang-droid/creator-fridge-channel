import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
// Prefer service role key but fall back to generic API key if provided
const serviceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_API_KEY

export const supabaseServerClient = () => {
  if (!supabaseUrl || !serviceRoleKey) {
    console.warn(
      'Supabase credentials not configured. Creator features depending on Supabase will be disabled.',
    )
    return null
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
    },
  })
}
