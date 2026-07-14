import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://pegrchicjdtdfulepjql.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlZ3JjaGljamR0ZGZ1bGVwanFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNDQzMTMsImV4cCI6MjA5OTYyMDMxM30.fG7UiPMOSTcTQwYV8vXb1Yv5mlAbx14w8vODFP9LpK8";

let browserClient: SupabaseClient | null = null;

export function getSupabase() {
  if (typeof window === "undefined") {
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  if (!browserClient) {
    browserClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return browserClient;
}
