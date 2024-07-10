import React from "react"
import CardBackOffice from "./CardBackOffice"

const CardsBackOffice = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardBackOffice
          image="https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg"
          name="Firulais"
          age="2"
          description="Firulais es un perro muy juguetón y cariñoso. Le encanta correr y
            jugar en el parque."
        />
      </div>
    </main>
  )
}

export default CardsBackOffice
