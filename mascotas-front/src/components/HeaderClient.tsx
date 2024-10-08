import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  ActivityIcon,
  ContactIcon,
  DicesIcon,
  HomeIcon,
  MenuClosedIcon,
  MountainIcon,
  TagsIcon,
} from "@/icons";
import { useAuthStore } from "@/store";
import { urlBase } from "@/backend";
import { useRouter } from "next/router";
import { toast } from "sonner";

export default function HeaderClient() {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const token = useAuthStore((state) => state.token);
  const handleSubmit = async () => {
    try {
      const response = await urlBase.post(
        `/api/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        setUser(null);
        setToken("");
        router.push("/");
        toast.success("Sesión cerrada");
      }
    } catch (error: any) {
      console.error("Error de red", error.request.response);
      toast.error(error.request.response);
    }
  };
  return (
    <header className="w-full bg-[#6cc4a1] px-6 py-0 sm:px-6 md:py-0 fixed top-0 shadow-md z-[99999999]">
      <div className="w-full m-0 py-0 flex items-center justify-center md:justify-between">
        <Link href="/" className="flex items-center" prefetch={false}>
          <img src="/logo.png" alt="logo" className="w-auto h-24" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-xl font-medium text-white hover:underline"
            prefetch={false}
          >
            Inicio
          </Link>
          <Link
            href="/adopta"
            className="text-xl font-medium text-white hover:underline"
            prefetch={false}
          >
            Adopta
          </Link>
          <Link
            href="/participa"
            className="text-xl font-medium text-white hover:underline"
            prefetch={false}
          >
            Participa
          </Link>
          <Link
            href="/educacion-y-recursos"
            className="text-xl font-medium text-white hover:underline"
            prefetch={false}
          >
            Educación y recursos
          </Link>
          <Link
            href="/blog"
            className="text-xl font-medium text-white hover:underline"
            prefetch={false}
          >
            Blog
          </Link>
          <Link
            href="/contacto"
            className="text-xl font-medium text-white hover:underline"
            prefetch={false}
          >
            Contacto
          </Link>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          {user ? (
            <>
              {" "}
              <Button
                variant="outline"
                size="sm"
                className="hover:text-white rounded-xl py-6 px-4 text-[#1f9063] border-solid border-[#1f9063] hover:border-[#fff] hover:bg-white/20 text-base"
              >
                {user.name}
              </Button>
              <Button
                size="sm"
                onClick={handleSubmit}
                className="bg-[#1f9063] rounded-xl py-6 px-4 text-white hover:bg-[#1a7a54] text-base"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/register">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:text-white rounded-xl py-6 px-4 text-[#1f9063] border-solid border-[#1f9063] hover:border-[#fff] hover:bg-white/20 text-base"
                >
                  Registro
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="sm"
                  className="bg-[#1f9063] rounded-xl py-6 px-4 text-white hover:bg-[#1a7a54] text-base"
                >
                  Iniciar sesión
                </Button>
              </Link>
            </>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-[#6cc4a1] fixed bottom-8 right-4 rounded-full shadow-lg z-50"
            >
              <MenuClosedIcon className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#6cc4a1] p-4 fixed bottom-0 right-0 w-full max-w-sm h-auto rounded-t-lg shadow-lg"
          >
            <div className="grid gap-4">
              <Link
                href="/adopta"
                className="flex items-center gap-2 text-xl font-medium text-white hover:underline"
                prefetch={false}
              >
                <TagsIcon className="h-5 w-5" />
                Adopta
              </Link>
              <Link
                href="/participa"
                className="flex items-center gap-2 text-xl font-medium text-white hover:underline"
                prefetch={false}
              >
                <ActivityIcon className="h-5 w-5" />
                Participa
              </Link>
              <Link
                href="/historias-y-consejor"
                className="flex items-center gap-2 text-xl font-medium text-white hover:underline"
                prefetch={false}
              >
                <DicesIcon className="h-5 w-5" />
                Historias y Consejos
              </Link>
              <Link
                href="/contacto"
                className="flex items-center gap-2 text-xl font-medium text-white hover:underline"
                prefetch={false}
              >
                <ContactIcon className="h-5 w-5" />
                Contacto
              </Link>
              <div className="flex items-center gap-2">
                <Link href="/register">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#6cc4a1] hover:bg-white/20"
                  >
                    Registro
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="sm"
                    className="bg-[#1f9063] text-white hover:bg-[#1a7a54]"
                  >
                    Iniciar sesión
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
