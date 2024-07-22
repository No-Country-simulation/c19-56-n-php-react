import RegisterForm from "@/components/RegisterForm"
import ClientLayout from "@/layout/ClientLayout"
import Link from "next/link"

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
                Crear Cuenta
              </h2>
            </div>
            <RegisterForm />
            <p className="mt-0 text-center text-sm text-muted-foreground">
              Ya tienes cuenta?{" "}
              <Link
                href="/login"
                className="font-medium text-primary hover:underline text-[#1f9063]"
                prefetch={false}
              >
                Inicia sessión aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </ClientLayout>
  )
}
