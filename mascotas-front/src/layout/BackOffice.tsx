import FooterBackOffice from "@/components/FooterBackOffice";
import HeaderBackOffice from "@/components/HeaderBackOffice";
import Sidebar from "@/components/Sidebar";
import { Redirect } from "@/shared/Redirect";

interface Props {
  children: React.ReactNode;
}

export default function BackOffice({ children }: Props) {
  return (
    <>
      <Redirect />
      <section className="flex h-screen">
        <nav>
          <Sidebar />
        </nav>
        <main className="flex-1 overflow-y-auto">
          <HeaderBackOffice />
          <div className="min-h-screen">{children}</div>
          <FooterBackOffice />
        </main>
      </section>
    </>
  );
}
