import React, { useEffect, useState } from "react"
import CardBackOffice from "./CardBackOffice"
import axios from "axios"
import { Pet } from "@/Types"

const CardsBackOffice = () => {
  const [pets, setPets] = useState<Pet[]>([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/hello")
      .then(({ data }) => setPets(data.pets))
  }, [])

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center justify-between py-10">
        <h1 className="text-2xl font-bold">Mascotas dsiponibles</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pets.map((pet) => (
          <CardBackOffice
            key={pet.id}
            image={pet.imagen[0]}
            name={pet.nombre}
            age={pet.edad}
            description={pet.descripcion}
          />
        ))}
      </div>
    </main>
  )
}

export default CardsBackOffice
