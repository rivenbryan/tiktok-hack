import { supabase } from './db'

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) console.log('Error: ', error)
  else return data
}

export async function signUpWithEmail(
  email: string,
  password: string,
  username: string,
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  if (error) console.log('Error: ', error)
  else {
    if (data?.user) {
      await supabase.from('users').insert({
        userId: data.user.id,
        username,
      })
    }
    return data
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) console.log('Error:', error)
}
