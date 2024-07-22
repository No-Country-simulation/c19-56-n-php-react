import ContactForm from "@/components/ContactForm"
import { FacebookIconGreen, InstagramIconGreen, LinkedinIconGreen, TwitterIconGreen } from "@/icons"
import ClientLayout from "@/layout/ClientLayout"
import Link from "next/link"

export default function ContactPage() {
  return (
    <ClientLayout>
      <div className="flex min-h-screen">
        <div className="flex-1">
          <div className="flex flex-col justify-center h-40 gap-8">
            <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-primary text-[#1f9063]">Siguenos en</h2>

            <div className="mx-auto flex justify-center md:justify-start space-x-4 mb-5">
              <Link
                href="#"
                className="hover:text-gray-300"
                prefetch={false}
              >
                <FacebookIconGreen className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-300 text-[#1f9043]"
                prefetch={false}
              >
                <InstagramIconGreen className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-300"
                prefetch={false}
              >
                <TwitterIconGreen className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-300"
                prefetch={false}
              >
                <LinkedinIconGreen className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <img
            className="w-full h-screen object-cover"
            src="/image-contact.jpeg"
            alt="contacto"
          />
        </div>

        <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 rounded-[10px]">
          <div className="w-full max-w-lg space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary text-[#1f9063]">
                Contáctanos
              </h2>
              <p className="text-sm py-6 text-center font-bold">
                Para contactarse con nosotros, complete el siguiente formulario.
                Muchas gracias
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </ClientLayout>
  )
}
