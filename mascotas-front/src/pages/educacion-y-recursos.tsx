import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { useFetchWithOutPaginate } from "@/hooks/useFetchWithOutPaginate";
import {
  FacebookIconGreen,
  InstagramIconGreen,
  LinkedinIconGreen,
  TwitterIconGreen,
} from "@/icons";
import ClientLayout from "@/layout/ClientLayout";
import { NextPage } from "next";
import Link from "next/link";

const EducationAndResource: NextPage = () => {
  const { data, isLoading } = useFetchWithOutPaginate(
    "/api/education-and-resource"
  );
  console.log(data);
  return (
    <ClientLayout>
      <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
        {data?.map((item: any) => (
          <div
            key={item.id}
            className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src={item.url}
              alt="Imagen de la tarjeta"
              width={500}
              height={300}
              className="object-cover w-full h-48"
              style={{ aspectRatio: "500/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <Button variant="link" className="mt-2 text-primary"></Button>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6cc4a1] text-white px-6 py-2 rounded-full w-full hover:bg-[#5aa38b] transition-colors duration-300 ease-in-out"
              >
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </section>
    </ClientLayout>
  );
};

export default EducationAndResource;
