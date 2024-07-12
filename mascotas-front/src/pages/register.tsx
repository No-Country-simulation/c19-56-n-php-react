import RegisterForm from "@/components/RegisterForm"
import Link from "next/link"

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 border border-gray-300 rounded-[10px]">
      <div className="w-full max-w-lg space-y-8 border border-gray-500 rounded-[10px] p-7 border-opacity-30">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary">Crear Cuenta</h2>
        </div>
        <RegisterForm />
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Ó{" "}
            <Link href="/login" className="font-medium text-primary hover:underline" prefetch={false}>
              Inicia sessión en una cuenta existente
            </Link>
          </p>
      </div>
    </div>
  )
}