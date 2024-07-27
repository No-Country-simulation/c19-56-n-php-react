import CarrucelBlog from "@/components/CarrucelBlog"
import ClientLayout from "@/layout/ClientLayout"
import Link from "next/link"

export default function index() {
  const blogPosts = [
    {
      id: 1,
      title: "Cómo Prepararse para la Adopción de una Mascota",
      description:
        "Adoptar una mascota es una decisión importante. Aprende cómo prepararte adecuadamente para darle la bienvenida a tu nuevo amigo peludo.",
      image: "/image-adopt.jpeg",
      category: "Preparación",
      link: "/blog/como-prepararse-para-la-adopcion-de-una-mascota",
      date: "2024-01-01",
    },
    {
      id: 2,
      title: "Beneficios de Adoptar en Lugar de Comprar",
      description:
        "Descubre los beneficios de adoptar una mascota en lugar de comprar una. Desde salvar vidas hasta encontrar un compañero fiel.",
      image: "/image-contact.jpeg",
      category: "Beneficios",
      link: "/blog/beneficios-de-adoptar-en-lugar-de-comprar",
      date: "2024-02-15",
    },
    {
      id: 3,
      title: "Historias de Éxito: Adopciones Felices",
      description:
        "Lee algunas de las historias de éxito más conmovedoras de personas que han adoptado mascotas y les han dado una segunda oportunidad.",
      image: "/image-login.jpeg",
      category: "Historias",
      link: "/blog/historias-de-exito-adopciones-felices",
      date: "2024-03-20",
    },
  ]

  const categories = [
    { name: "Preparación", link: "/blog/category/preparacion" },
    { name: "Beneficios", link: "/blog/category/beneficios" },
    { name: "Historias", link: "/blog/category/historias" },
  ]

  const popularPosts = [
    {
      id: 1,
      title: "Consejos para la Primera Noche con tu Mascota",
      image: "/image-register.jpeg",
      link: "/blog/consejos-primera-noche-con-tu-mascota",
    },
    {
      id: 2,
      title: "Cómo Elegir el Mejor Alimento para tu Perro",
      image: "/image-adopt.jpeg",
      link: "/blog/como-elegir-mejor-alimento-para-perro",
    },
  ]

  return (
    <ClientLayout>
      <section id="blog" className="pb-12 bg-gray-100">
        <CarrucelBlog posts={blogPosts} />
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6"></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SECCION DE CARDS DEL BLOG */}
            {/* SECCION DE CARDS DEL BLOG */}
            {/* SECCION DE CARDS DEL BLOG */}
            <div className="md:col-span-2">
              {blogPosts.map((post) => (
                <div key={post.id} className="mb-8">
                  <Link href={post.link}>
                    <p className="block overflow-hidden rounded-t-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover"
                      />
                    </p>
                  </Link>
                  <div className="p-4 bg-white rounded-b-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-2">
                      <Link href={post.link}>
                        <p className="hover:underline">{post.title}</p>
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <div className="flex items-center justify-between text-gray-400 text-sm">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <Link
                        href={`/blog/category/${post.category.toLowerCase()}`}
                      >
                        <p className="hover:underline">{post.category}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SECCION DEL SIDEBAR */}
            {/* SECCION DEL SIDEBAR */}
            {/* SECCION DEL SIDEBAR */}
            <aside className="md:col-span-1">
              <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <h4 className="text-xl font-semibold mb-4">Categorías</h4>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link href={category.link}>
                        <p className="text-gray-600 hover:underline">
                          {category.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">
                  Artículos Populares
                </h4>
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex items-center mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <Link href={post.link}>
                        <p className="text-gray-600 hover:underline">
                          {post.title}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}
