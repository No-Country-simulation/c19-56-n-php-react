export default function WaysPrticipa() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Formas de Colaborar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Voluntariado</h3>
            <p className="text-gray-600">Únete como voluntario en nuestros eventos y ayuda a cuidar a las mascotas.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Donaciones</h3>
            <p className="text-gray-600">Haz una donación para apoyar nuestra causa y mejorar la vida de las mascotas.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Adopciones</h3>
            <p className="text-gray-600">Adopta una mascota y dale un hogar lleno de amor y cuidados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
