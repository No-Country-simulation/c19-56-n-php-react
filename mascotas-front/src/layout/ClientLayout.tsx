import FooterClient from "@/components/FooterClient"
import HeaderClient from "@/components/HeaderClient"

interface Props {
  children: React.ReactNode
}

export default function ClientLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#6cc4a1]">
        <HeaderClient />
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
      <footer className="bg-[#4cacbc]">
        <FooterClient />
      </footer>
    </div>
  )
}
