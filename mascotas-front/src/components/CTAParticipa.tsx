import Link from "next/link"

export default function CTAParticipa() {
  return (
    <section className="py-12 bg-[#1f9063] text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">¡Únete a nuestra causa!</h2>
        <Link href="/register">
          <p className="bg-white text-green-600 px-6 py-3 rounded-full text-lg">Regístrate Ahora</p>
        </Link>
      </div>
    </section>
  );
}
