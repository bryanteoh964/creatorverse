import { createClient } from '@supabase/supabase-js';

const URL = "https://fjyssprovolkrjukfypc.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeXNzcHJvdm9sa3JqdWtmeXBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwMjM2ODYsImV4cCI6MjAwODU5OTY4Nn0.zyrQbWPIeVjCqy3B8v7UaYx-GoPGDPrm0lUV9a8_kFs"

export const supabase = createClient(URL, API_KEY);