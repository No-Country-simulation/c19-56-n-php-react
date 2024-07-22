import Link from "next/link"
import LoginForm from "@/components/LoginForm"
import ClientLayout from "@/layout/ClientLayout"

export default function page() {
  return (
    <ClientLayout>
      <div className="flex min-h-screen">
        <div className="flex-1">
          <img
            className="w-full h-screen object-cover"
            src="/image-register.jpeg"
            alt="registrarse"
          />
        </div>

        <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 border border-gray-30 rounded-[10px]">
          <div className="w-full max-w-lg space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary text-[#1f9063]">
                Iniciar sesión
              </h2>
              <p className="text-sm py-6 text-center">
                Ingresa tu correo electrónico y contraseña para ingresar a tu
                cuenta
              </p>
            </div>
            <LoginForm />
            <p className="mt-0 text-center text-sm text-muted-foreground">
              ¿Aún no tienes cuenta?{" "}
              <Link
                href="/register"
                className="font-medium text-primary hover:underline text-[#1f9063]"
                prefetch={false}
              >
                Registrate aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </ClientLayout>
  )
}
