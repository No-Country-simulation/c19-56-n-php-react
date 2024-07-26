import Link from "next/link"

export default function HeroParticipa() {
  return (
    <section className="w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/participa.jpeg')" }}>
      <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold">Participa con Nosotros</h1>
        <p className="text-xl mt-4">Únete a nuestros eventos y ayuda a encontrar hogares para mascotas.</p>
        <Link href="#events">
          <p className="mt-6 bg-[#1f9063] px-6 py-3 rounded-full text-lg">Ver Eventos</p>
        </Link>
      </div>
    </section>
  );
}
