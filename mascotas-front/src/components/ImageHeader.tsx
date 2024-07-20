interface Props {
  image: string
}

export default function ImageHeader({image}: Props) {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        src={image}
        alt="Header Image"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Adopta</h1>
      </div>
    </section>
  )
}