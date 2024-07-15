import FooterBackOffice from "@/components/FooterBackOffice"
import HeaderBackOffice from "@/components/HeaderBackOffice"
import Sidebar from "@/components/Sidebar"

interface Props {
  children: React.ReactNode
}

export default function BackOffice({ children }: Props) {
  return (
    <section className="flex h-screen">
      <nav>
        <Sidebar />
      </nav>
      <main className="flex-1 overflow-y-auto">
        <HeaderBackOffice />
        {children}
        <FooterBackOffice />
      </main>
    </section>
  )
}
