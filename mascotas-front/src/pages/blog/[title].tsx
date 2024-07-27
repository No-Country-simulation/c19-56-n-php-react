import ClientLayout from "@/layout/ClientLayout"
import Link from "next/link"

export default function page() {
  const singlePost = {
    id: 1,
    title: "Cómo Prepararse para la Adopción de una Mascota",
    content: `
      <p>Adoptar una mascota es una decisión importante. Aquí te explicamos cómo prepararte adecuadamente para darle la bienvenida a tu nuevo amigo peludo.</p>
      <h2>1. Haz tu investigación</h2>
      <p>Investiga sobre las diferentes razas y tipos de mascotas para encontrar la que mejor se adapte a tu estilo de vida.</p>
      <h2>2. Prepara tu hogar</h2>
      <p>Asegúrate de tener todo lo necesario, como cama, comida, juguetes, etc., antes de la llegada de la mascota.</p>
      <h2>3. Consulta al veterinario</h2>
      <p>Es importante llevar a tu nueva mascota al veterinario para un chequeo inicial y vacunas necesarias.</p>
    `,
    image: "/image-adopt.jpeg",
    category: "Preparación",
    author: "Juan Pérez",
    date: "2024-01-01",
    tags: ["Adopción", "Preparación", "Mascotas"],
  }

  const relatedPosts = [
    {
      id: 2,
      title: "Beneficios de Adoptar en Lugar de Comprar",
      image: "/image-login.jpeg",
      link: "/blog/beneficios-de-adoptar-en-lugar-de-comprar",
    },
    {
      id: 3,
      title: "Historias de Éxito: Adopciones Felices",
      image: "/image-register.jpeg",
      link: "/blog/historias-de-exito-adopciones-felices",
    },
    {
      id: 4,
      title: "Consejos para la Primera Noche con tu Mascota",
      image: "/image-contact.jpeg",
      link: "/blog/consejos-primera-noche-con-tu-mascota",
    },
  ]

  return (
    <ClientLayout>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
            <img
              src={singlePost.image}
              alt={singlePost.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">{singlePost.title}</h1>
            <div className="flex items-center justify-between text-gray-400 text-sm mb-6">
              <span>{new Date(singlePost.date).toLocaleDateString()}</span>
              <span>Por {singlePost.author}</span>
              <span>{singlePost.category}</span>
            </div>
            <div
              className="prose max-w-none mb-6"
              dangerouslySetInnerHTML={{ __html: singlePost.content }}
            ></div>
            <div className="flex flex-wrap gap-2">
              {singlePost.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
                >
                  <Link href={post.link}>
                    <div className="block overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}
