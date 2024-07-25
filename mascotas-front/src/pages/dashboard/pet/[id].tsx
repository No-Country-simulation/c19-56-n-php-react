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
      <div className="flex flex-col gap-6 p-6 md:p-8 lg:p-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Pet Details</h1>
          <div className="flex items-center gap-4">
            <Button onClick={handleClick} variant="outline" size="sm">
              {isEditing ? "Edit" : <MenuOpenIcon />}
            </Button>
            <Button
              onClick={() => alert("hacer logica de eliminar")}
              variant="destructive"
              size="sm"
            >
              Delete
            </Button>
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <FormInput
            id="nombre"
            label="Nombre"
            disabled={isEditing}
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.nombre && formik.touched.nombre
                ? formik.errors.nombre
                : ""
            }
          />
          <FormInput
            id="raza"
            label="Raza"
            disabled={isEditing}
            value={formik.values.raza}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.raza && formik.touched.raza
                ? formik.errors.raza
                : ""
            }
          />
          <FormInput
            id="edad"
            label="Edad"
            disabled={isEditing}
            value={formik.values.edad}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.edad && formik.touched.edad
                ? formik.errors.edad
                : ""
            }
          />
          <FormInput
            id="genero"
            label="Género"
            disabled={isEditing}
            value={formik.values.genero}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.genero && formik.touched.genero
                ? formik.errors.genero
                : ""
            }
          />
          <FormInput
            id="tamaño"
            label="Tamaño"
            disabled={isEditing}
            value={formik.values.tamaño}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.tamaño && formik.touched.tamaño
                ? formik.errors.tamaño
                : ""
            }
          />
          <FormInput
            id="color"
            label="Color"
            disabled={isEditing}
            value={formik.values.color}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.color && formik.touched.color
                ? formik.errors.color
                : ""
            }
          />
          <FormInput
            id="estado"
            label="Estado"
            disabled={isEditing}
            value={formik.values.estado}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.estado && formik.touched.estado
                ? formik.errors.estado
                : ""
            }
          />
          <FormInput
            id="ubicación"
            label="Ubicación"
            disabled={isEditing}
            value={formik.values.ubicación}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.ubicación && formik.touched.ubicación
                ? formik.errors.ubicación
                : ""
            }
          />
          <FormTextarea
            id="descripcion"
            label="Descripción"
            disabled={isEditing}
            value={formik.values.descripcion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.descripcion && formik.touched.descripcion
                ? formik.errors.descripcion
                : ""
            }
          />
          <Button type="submit" disabled={isEditing}>
            Save
          </Button>
        </form>
        <div className="grid gap-4">
          <h2 className="text-xl font-bold">Fotos</h2>
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {formik.values.images.map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Pet Photo ${index + 1}`}
                  className="aspect-square w-full rounded-md object-cover"
                />
                {!isEditing && (
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-2 right-2 text-red-600"
                  >
                    <AiOutlineDelete size={24} />
                  </button>
                )}
              </div>
            ))}
            {formik.values.images.length < 4 && (
              <label className="flex items-center justify-center border-2 border-dashed rounded-md h-32 cursor-pointer">
                <AiOutlinePlus size={24} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAddImage}
                />
              </label>
            )}
          </div>
          {formik.errors.images && formik.touched.images && (
            <div className="text-red-500">{formik.errors.images}</div>
          )}
        </div>
      </div>
    </BackOffice>
  );
};

export default PetForm;
