import type { Metadata } from "next"
import LoginForm from "@/components/auth/LoginForm"


export const metadata: Metadata = {
  title: 'CashTrackr - IniciarSesion',
  description: 'CashTrackr - IniciarSesion'
}

export default function LoginPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Inicar Sesion</h1>
      <p className="text-3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>

      <LoginForm />
    </>
  )
}
