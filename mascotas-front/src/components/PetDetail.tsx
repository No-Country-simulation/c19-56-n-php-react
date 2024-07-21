"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  CalendarIcon,
  ChevronDownIcon,
  DogIcon,
  PawPrintIcon,
  RulerIcon,
  SmileIcon,
} from "@/icons"

export default function PetDetail() {
  const [selectedImage, setSelectedImage] = useState(0)
  const pet = {
    name: "Buddy",
    age: 3,
    size: "Mediano",
    breed: "Labrador",
    personality: "Amigable y juguetón",
    history:
      "Buddy fue rescatado de un refugio local hace 2 años. Desde entonces, se ha convertido en un miembro querido de nuestra familia. Es un perro muy cariñoso y le encanta jugar con los niños. Esperamos que pueda encontrar un hogar amoroso donde pueda continuar siendo feliz.",
    images: [
      "https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg",
      "https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg",
      "https://unamglobal.unam.mx/wp-content/uploads/2023/03/estresperros.jpg",
      "https://cdn.prod.website-files.com/63634f4a7b868a399577cf37/6487b2b6e5ab1d0108e5b597_nombres%20para%20perros%20pequen%CC%83os.jpg",
    ],
  }

  return (
    <div className="relative grid md:grid-cols-1 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="absolute inset-0 opacity-10 z-0 bg-logo bg-right-top bg-cover animate-moveBackground animate-pulse" />
      <div className="relative z-10 grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-4 md:gap-12 items-start">
          <img
            src={pet.images[selectedImage]}
            alt={pet.name}
            width={600}
            height={600}
            className="w-full rounded-lg overflow-hidden"
          />
          <div className="grid grid-cols-4 gap-4">
            {pet.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={pet.name}
                width={150}
                height={150}
                className={`w-full rounded-lg overflow-hidden cursor-pointer ${
                  index === selectedImage ? "border-2 border-primary" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:gap-6">
          <div>
            <h1 className="text-3xl font-bold">{pet.name}</h1>
          </div>
          <div className="grid grid-cols-2 space-y-2 gap-2">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 fill-muted-foreground" />
              <span className="text-muted-foreground">{pet.age} años</span>
            </div>
            <div className="flex items-center gap-2">
              <RulerIcon className="w-5 h-5 fill-muted-foreground" />
              <span className="text-muted-foreground">{pet.size}</span>
            </div>
            <div className="flex items-center gap-2">
              <DogIcon className="w-5 h-5 fill-muted-foreground" />
              <span className="text-muted-foreground">{pet.breed}</span>
            </div>
            <div className="flex items-center gap-2">
              <SmileIcon className="w-5 h-5 fill-muted-foreground" />
              <span className="text-muted-foreground">{pet.personality}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[90%]">
            <h3 className="text-xl font-bold">Historia</h3>

            <p className="text-muted-foreground text-lg">{pet.history}</p>
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="#" className="flex-1.1" prefetch={false}>
              <Button
                className="hover:bg-[#1f9063] hover:text-[#fff] text-[#1f9063] bg-white"
                size="lg"
                variant="outline"
              >
                Atrás
              </Button>
            </Link>

            <Link href="#" className="flex-1" prefetch={false}>
              <Button
                className="hover:bg-[#1f9063] hover:text-[#fff] text-[#1f9063] bg-white"
                size="lg"
                variant="outline"
              >
                Siguiente
              </Button>
            </Link>

            <Link href="#" className="flex-1" prefetch={false}>
              <Button
                className="bg-[#1f9063] text-[#fff] hover:text-[#1f9063] hover:bg-white"
                size="lg"
              >
                <PawPrintIcon className="h-5 w-5 mr-1" />
                Adoptar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}