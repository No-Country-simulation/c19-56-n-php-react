import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Feria de Adopción de Mascotas",
    description: "Únete a nuestra feria de adopción y encuentra el compañero perfecto para ti. Habrá muchas mascotas esperando por un hogar amoroso.",
  },
  {
    id: 2,
    title: "Caminata Canina",
    description: "Participa en nuestra caminata canina y disfruta de un día al aire libre con tu mascota. Habrá concursos y premios para los participantes.",
  },
  {
    id: 3,
    title: "Taller de Cuidado de Mascotas",
    description: "Aprende las mejores prácticas para el cuidado de tus mascotas en nuestro taller especial. Expertos en el campo estarán presentes para responder tus preguntas.",
  },
];


export default function EventsParticipa() {
  return (
    <section id="events" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Próximos Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map(event => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
              <Link href={`/event/${event.id}`}>
                <p className="mt-4 inline-block text-green-500">Leer más</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
