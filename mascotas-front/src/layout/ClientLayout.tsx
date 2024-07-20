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
        <div className="mx-auto px-0 py-0">
          {children}
        </div>
      </main>
      <footer className="bg-[#4cacbc]">
        <FooterClient />
      </footer>
    </div>
  )
}
