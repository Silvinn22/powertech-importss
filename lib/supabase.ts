import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let browserClient: SupabaseClient | null = null;

export function getSupabase() {
  if (typeof window === "undefined") {
    return createClient(supabaseUrl, supabaseAnonKey);
  }
  if (!browserClient) {
    browserClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return browserClient;
}

export function getSupabaseAdmin() {
  if (!supabaseServiceKey) return null;
  return createClient(supabaseUrl, supabaseServiceKey);
}
