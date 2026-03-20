import type { Metadata } from "next"
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm"


export const metadata: Metadata = {
  title: 'CashTrackr - Olvide mi password',
  description: 'CashTrackr - Olvide mi password'
}

export default function ForgotPasswordPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">¿Olvidaste tu contraseña?</h1>
      <p className="text-3xl font-bold">aqui puedes<span className="text-amber-500">reestablcerla</span></p>

      <ForgotPasswordForm />
    </>
  )
}
