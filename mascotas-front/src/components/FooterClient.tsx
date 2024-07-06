import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, LinkedinIcon, MountainIcon, TwitterIcon } from "@/icons";

export default function FooterClient() {
  return (
    <footer className="bg-[#4cacbc] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-center md:text-left">
          <div className="flex flex-col justify-center gap-6 md:gap-2">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src="/logo-large.png" alt="logo" />
            </div>
            <div className="space-x-4 space-y-2 mb-4 ">
              <Link href="#" className="hover:underline" prefetch={false}>
                Sobre nosotros
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Adopta
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Participa
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Contacto
              </Link>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                <InstagramIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                <LinkedinIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Suscríbete</h3>
            <p className="mb-4">
              Únete a nuestra lista de correo para recibir guías de educación y
              consejos de adopción.
            </p>
            <form className="flex flex-col items-center md:flex-row gap-2">
              <Input
                type="email"
                placeholder="Ingresa tu email"
                className="flex-1 bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-0 focus:border-white"
              />
              <Button
                type="submit"
                className="bg-[#1f9063] text-white hover:bg-[#187252] w-full md:w-auto"
              >
                Suscríbete
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-center gap-6 md:gap-0">
          <div className="space-x-4 mb-2 md:mb-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              Cookies
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Descargo
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Política de privacidad
            </Link>
          </div>
          <div>&copy; 2024 Acme Inc. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
