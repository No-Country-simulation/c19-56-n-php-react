import { useSearchMascotasStore } from "@/store/filter/SearchMascotas.store"
import SearchClient from "./SearchClient"

interface Props {
  image: string
}

export default function ImageHeader({ image }: Props) {
  const setSearchTerm = useSearchMascotasStore(state => state.setInputValue)
  const searchTerm = useSearchMascotasStore(state => state.inputValue)
  const headlesSearch = (search: string) => {
    setSearchTerm(search)
  }
  return (
    <section className="relative w-full h-[400px] overflow-hidden md:h-[500px]">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        src={image}
        alt="Header Image"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 gap-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          Adopta
        </h1>
        <p className="text-xl md:text-3xl text-white mb-4">
          Dale a un amigo peludo una segunda oportunidad y recibe amor
          incondicional.
        </p>
        <SearchClient placeholder="Buscar mascota por Nombre, Peso y Personalidad" onSearch={headlesSearch}/>

      </div>
    </section>
  )
}
