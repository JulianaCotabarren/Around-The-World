import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lmowapdrgkydsfxojqrh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxtb3dhcGRyZ2t5ZHNmeG9qcXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5NjgyMDIsImV4cCI6MjAwODU0NDIwMn0.hzlyG6yb-QLYpQ9DmjiT6wXK9-CFwxOfOvT6z_r8f_o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
