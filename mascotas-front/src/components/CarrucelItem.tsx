import React from "react"

interface Props {
  image: string
  title: string
}

const CarrucelItem = ({ image, title }: Props) => {
  return (
    <div className="relative group overflow-hidden rounded-lg h-96">
      <img
        src={image}
        alt="Cover image"
        width={1200}
        height={800}
        className="object-cover w-full aspect-[5/2]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6">
        <h3 className="text-white text-3xl font-semibold tracking-tight">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default CarrucelItem
