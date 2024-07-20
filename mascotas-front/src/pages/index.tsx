import Cards from "@/components/Cards"
import ImageHeader from "@/components/ImageHeader"
import ClientLayout from "@/layout/ClientLayout"

export default function Home() {
  return (
    <ClientLayout>
      <ImageHeader image={"/adopta.jpeg"} />
      <Cards />
    </ClientLayout>
  )
}
