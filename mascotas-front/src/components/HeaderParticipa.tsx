import Link from "next/link";

export default function HeaderParticipa() {
  return (
    <header className="w-full bg-green-600 px-6 py-4 fixed top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-xl font-bold">AdoptaMascotas</p>
        </Link>
        <nav className="flex space-x-4">
          <Link href="/participa">
            <p className="text-white">Participa</p>
          </Link>
          <Link href="/adopta">
            <p className="text-white">Adopta</p>
          </Link>
          <Link href="/contacto">
            <p className="text-white">Contacto</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}
