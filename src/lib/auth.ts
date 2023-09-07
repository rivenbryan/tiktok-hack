import { Solitreo } from "next/font/google";
import { supabase } from "./db";

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) console.log("Error: ", error);
  else return data;
}

export async function signUpWithEmail(email: string, password: string, username: string) {

  const { data, error }: any = await supabase.auth.signUp({
    email,
    password,
  });
  console.log(data)
  const { user } = data;
  console.log(user?.id)
  console.log(error)
  // const { data1, error1 }: any = await supabase
  //   .from("user")
  //   .insert([{ id: user.id, username: username }])
  //   .select();
  if (error) console.log("Error: ", error);
}
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log("Error:", error);
}
