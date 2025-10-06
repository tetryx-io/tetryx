'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// Note: Server actions are now handled client-side with Tetryx auth
// These are kept for compatibility but should be replaced with client-side calls

export async function login(formData: FormData) {
  // Redirect to client-side login handling
  redirect('/auth/login')
}

export async function signup(formData: FormData) {
  // Redirect to client-side signup handling
  redirect('/auth/signup')
}