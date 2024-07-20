import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Props {
  image: string
}

export default function ImageHeader({image}: Props) {
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
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">Adopta</h1>
        <p className="text-xl md:text-2xl text-white mb-4">
          Dale a un amigo peludo una segunda oportunidad y recibe amor incondicional.
        </p>
        <Link href='#' className="bg-[#1f9063] text-white px-6 py-4 rounded-lg text-lg md:text-xl hover:bg-[#187252] transition-colors duration-300 ease-in-out">
          Encuentra a tu mascota
        </Link>
      </div>
    </section>
  )
}
