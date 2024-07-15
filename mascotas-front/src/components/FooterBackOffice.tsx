import Link from "next/link"

export default function FooterBackOffice() {
  return (
    <footer className="bg-[#666] text-white py-4 text-center text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm">&copy; 2024 . Todos los derechos reservados.</p>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}