import { Solitreo } from "next/font/google";
import { supabase } from "./db";

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function signUpWithEmail(email: string, password: string) {
  const { data, error }: any = await supabase.auth.signUp({
    email,
    password,
  });
  const { user } = data;
  if (error) throw error;
  return user;
}
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log("Error:", error);
}
