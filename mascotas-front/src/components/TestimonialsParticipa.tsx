const testimonials = [
  {
    id: 1,
    name: "María Gómez",
    message: "Adoptar a mi perro a través de esta organización ha sido una experiencia maravillosa. El proceso fue fácil y estoy muy feliz con mi nuevo amigo.",
  },
  {
    id: 2,
    name: "Carlos López",
    message: "Participar en los eventos de adopción ha sido increíble. No solo encontré a mi gato perfecto, sino que también hice nuevos amigos en la comunidad.",
  },
  {
    id: 3,
    name: "Ana Fernández",
    message: "Recomiendo totalmente esta organización para adoptar mascotas. Son muy profesionales y realmente se preocupan por el bienestar de los animales.",
  },
];


export default function TestimonialsParticipa() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">{testimonial.message}</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
