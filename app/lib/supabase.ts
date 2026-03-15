import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const supabaseUrl = "https://pnbuizdxkfhbghmsyzmi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuYnVpemR4a2ZoYmdobXN5em1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNDc2MzgsImV4cCI6MjA4ODcyMzYzOH0.B4xJ2-xHLgvooNT5vFjpjeg7_b8Q1lg0MXFRscGXYCs";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
