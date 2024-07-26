import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import BackOffice from "@/layout/BackOffice";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { FormInput, FormTextarea } from "@/components/InputElements";
import { MenuOpenIcon } from "@/icons";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getPetOne, getPets } from "@/backend";
import { Pet } from "@/interfaces";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";

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
  console.log(pet, "pets");
  // const formik = useFormik({
  //   initialValues: {
  //     nombre: pet.nombre,
  //     raza: pet.raza,
  //     edad: pet.edad,
  //     genero: "",
  //     tamaño: pet.tamaño,
  //     color: "",
  //     estado: "",
  //     ubicación: "",
  //     descripcion: pet.descripcion,
  //     images: pet.images,
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  function handleClick() {
    setIsEditing(!isEditing);
  }

  // function handleAddImage(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       formik.setFieldValue("images", [
  //         ...formik.values.images,
  //         reader.result,
  //       ]);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  // function handleRemoveImage(index: number) {
  //   const newImages = formik.values.images.filter((_, i) => i !== index);
  //   formik.setFieldValue("images", newImages);
  // }

  // function handleDrop(event: any) {
  //   event.preventDefault();
  //   const file = event.dataTransfer.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       formik.setFieldValue("images", [
  //         ...formik.values.images,
  //         reader.result,
  //       ]);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  // function handleDragOver(event: any) {
  //   event.preventDefault();
  // }

  return (
    <BackOffice>
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
              {pet?.images?.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Imagen ${index + 1} de ${pet.name}`}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </BackOffice>
  );
};

export default PetForm;
