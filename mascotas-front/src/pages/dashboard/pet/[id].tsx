import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import BackOffice from "@/layout/BackOffice";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { FormInput, FormTextarea } from "@/components/InputElements";
import { MenuOpenIcon } from "@/icons";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  createImgPets,
  deletedImagePets,
  getPetOne,
  getPets,
  urlBase,
} from "@/backend";
import { Pet } from "@/interfaces";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";
import { UploadImgPets } from "@/components/UploadImgPets";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store";
import { toast } from "sonner";
import { mutate } from "swr";
import { useFetch } from "@/hooks";
import { useFetchWithOutPaginate } from "@/hooks/useFetchWithOutPaginate";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";

const validationSchema = Yup.object({
  nombre: Yup.string().required("Nombre es requerido"),
  raza: Yup.string().required("Raza es requerida"),
  edad: Yup.number().required("Edad es requerida").positive().integer(),
  genero: Yup.string().required("Género es requerido"),
  tamaño: Yup.string().required("Tamaño es requerido"),
  color: Yup.string().required("Color es requerido"),
  estado: Yup.string().required("Estado es requerido"),
  ubicación: Yup.string().required("Ubicación es requerida"),
  descripcion: Yup.string().required("Descripción es requerida"),
  images: Yup.array()
    .of(Yup.string().required("Imagen es requerida"))
    .max(4, "Máximo 4 imágenes"),
});

interface PetsProps {
  pet: Pet;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pets = await getPets();
  const paths = pets.map((pet: Pet) => ({
    params: { id: pet.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<PetsProps> = async (context) => {
  const { id } = context.params as Params;
  // console.log(context.params);
  const pet = await getPetOne(Number(id));
  return {
    props: {
      pet,
    },
  };
};

const pet = {
  id: 1,
  images: [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg",
  ],
  nombre: "Max",
  razaID: 101,
  tamaño: "Grande",
  peso: "30kg",
  edad: "5 años",
  personalidad: "Amigable",
  adopcionID: 201,
  raza: "Labrador Retriever",
  descripcion: "Un perro muy activo y cariñoso.",
  categoria: "Canes",
};

const PetForm: NextPage<PetsProps> = ({ pet }) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(true);
  const query = useRouter();
  const id = query.query.id;
  const token = useAuthStore((state) => state.token);
  const [loaging, setLoanding] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const data = useFetchWithOutPaginate(`/api/pets-images?pet_id=${id}`);
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (
      file &&
      !file.type.includes("image/jpeg") &&
      !file.type.includes("image/png") &&
      !file.type.includes("image/jpg")
    ) {
      toast.error("El archivo debe ser una imagen JPEG o PNG");
      event.target.value = "";
      return;
    }
    setFile(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("file call");
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    formData.append("pet_id", id as string);

    try {
      const response = await createImgPets(formData, token);
      if (response.status === 201) {
        const data = response.data;
        setLoanding(false);
        setFile(null);
        mutate(
          process.env.NEXT_PUBLIC_URL_BASE + `/api/pets-images?pet_id=${id}`,
          token
        );
        toast.success(data.message);
      }
    } catch (error) {
      let errorMessage = "Ocurrió un error. Por favor, inténtalo de nuevo.";
      if (error instanceof Error) {
        errorMessage = error.message;
        const additionalMessages = Object.entries(error)
          .filter(([key, _]) => key !== "message")
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n");
        if (additionalMessages) {
          errorMessage += `\n${additionalMessages}`;
        }
      }
      toast.error(errorMessage);
      setLoanding(false);
    }
  };
  const handleDelete = async (id: number) => {
    try {
      const response = await deletedImagePets(id, token);
      if (response.status === 200) {
        const data = response.data;
        mutate(
          process.env.NEXT_PUBLIC_URL_BASE + `/api/pets-images?pet_id=${id}`,
          token
        );
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BackOffice>
      <UploadImgPets>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted rounded-md p-8 cursor-pointer group hover:border-primary">
            {file && (
              <div className="flex justify-center">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Selected"
                  className="max-w-xs max-h-xs w-auto h-auto"
                />
              </div>
            )}
            <Input id="image" type="file" onChange={onFileChange} />
            <DialogFooter>
              <Button type="submit">Cargar imagen</Button>
              <div>
                <Button variant="outline">Cancelar</Button>
              </div>
            </DialogFooter>
          </div>
        </form>
      </UploadImgPets>
      <div className="w-full max-w-4xl mx-auto py-8 px-4 md:px-6">
        <div className="grid gap-6 items-start">
          <div className="grid gap-4">
            <h1 className="text-3xl font-bold">{pet.name}</h1>
            <Image
              src={pet.image}
              alt="Buddy the Golden Retriever"
              width={600}
              height={400}
              className="rounded-lg object-cover aspect-[3/2]"
            />
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <h2 className="text-xl font-semibold">Pet Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <span className="font-medium">Breed:</span>
                  <span>{pet.race.name}</span>
                </div>
                <div className="grid gap-1">
                  <span className="font-medium">Size:</span>
                  <span>{pet.size}</span>
                </div>
                <div className="grid gap-1">
                  <span className="font-medium">Weight</span>
                  <span>{pet.weight}</span>
                </div>
                <div className="grid gap-1">
                  <span className="font-medium">Age:</span>
                  <span>{pet.age} Años</span>
                </div>
                <div className="grid gap-1">
                  <span className="font-medium">Personality:</span>
                  <span>{pet.personality}</span>
                </div>
                <div className="grid gap-1">
                  <span className="font-medium">Status:</span>
                  <span className="text-green-500 font-medium">
                    {pet.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <h2 className="text-xl font-semibold">Sobre mi</h2>
              <p className="text-muted-foreground">{pet.description}</p>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-xl font-semibold">Más Imágenes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data &&
                Array.isArray(data.data) &&
                data.data.map((image: any) => (
                  <div key={image.id} className="relative">
                    <Image
                      src={image?.image}
                      alt={`Imagen ${image.id + 1}`}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                    <button
                      onClick={() => handleDelete(image.id)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </BackOffice>
  );
};

export default PetForm;

function UploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
