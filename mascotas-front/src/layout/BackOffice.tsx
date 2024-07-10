import SidebarBackOffice from "@/components/SidebarBackOffice";

interface Props {
  children: React.ReactNode;
}

export default function BackOffice({ children }: Props) {
  return (
    <section className="flex h-screen">
      <nav>
        <SidebarBackOffice />
      </nav>
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </section>
  );
}

