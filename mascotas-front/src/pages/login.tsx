import LoginForm from "@/components/LoginForm"
import Link from "next/link"

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8 border border-gray-500 rounded-[10px] p-7 border-opacity-30">
        <div>
        <h2 className="text-2xl font-bold">Iniciar sesión</h2>
        </div>
        <LoginForm />
        <div className="mt-4 text-center text-sm text-muted-foreground">
          ¿Aún no tienes una cuenta?{" "}
          <Link
            href="/register"
            className="font-medium underline underline-offset-4"
            prefetch={false}
          >
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  )
}
