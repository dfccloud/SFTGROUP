// Supabase Configuration
const SUPABASE_URL = "https://rrlycacyhvsmvvqflsnc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hmJDDaMCxB2jP4HfsTfrfw_F5DOtvn6"; // এখানে আপনার সেভ করে রাখা Publishable Key-টি বসিয়ে দিন

// Initialize Supabase Client
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
