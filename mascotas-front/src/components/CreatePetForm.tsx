"use client"

import { useState } from "react"
import { Formik, Form, ErrorMessage, FieldArray } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { TextInput } from "@/components/InputElements"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { CalendarIcon, RulerIcon, DogIcon, SmileIcon } from "@/icons"

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  age: Yup.number().required("La edad es obligatoria").min(0, "La edad no puede ser negativa"),
  size: Yup.string().required("El tamaño es obligatorio"),
  breed: Yup.string().required("La raza es obligatoria"),
  personality: Yup.string().required("La personalidad es obligatoria"),
  history: Yup.string().required("La historia es obligatoria"),
  images: Yup.array().of(Yup.mixed().required("La imagen es obligatoria")).min(1, "Debe proporcionar al menos una imagen"),
})

const AddPetForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const initialValues = {
    name: "",
    age: "",
    size: "",
    breed: "",
    personality: "",
    history: "",
    images: [null],
  }

  const handleSubmit = async (values: any) => {
    setLoading(true)
    try {
      // Llamada a la función para agregar la mascota (simulada)
      // const response = await addPet(values)
      // if (response.status === 200) {
      //   toast.success("¡Mascota agregada exitosamente!")
      //   router.push("/ruta-deseada")
      // }
      toast.success("¡Mascota agregada exitosamente!") // Simulación de éxito
      router.push("/ruta-deseada") // Redirigir después del éxito
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Ocurrió un error inesperado."
      )
    } finally {
      setLoading(false)
    }
  }

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
    index: number
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFieldValue(`images[${index}]`, file)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-scree bg-none">
      <div className="p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Agregar Nueva Mascota</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-6">
              <div className="space-y-2">
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  label="Nombre"
                  placeholder="Ingresa el nombre de la mascota"
                />
                <ErrorMessage name="name" component="div" className="text-red-500" />
              </div>
              <div className="space-y-2">
                <TextInput
                  id="age"
                  name="age"
                  type="number"
                  label="Edad"
                  placeholder="Ingresa la edad de la mascota"
                />
                <ErrorMessage name="age" component="div" className="text-red-500" />
              </div>
              <div className="space-y-2">
                <TextInput
                  id="size"
                  name="size"
                  type="text"
                  label="Tamaño"
                  placeholder="Ingresa el tamaño de la mascota"
                />
                <ErrorMessage name="size" component="div" className="text-red-500" />
              </div>
              <div className="space-y-2">
                <TextInput
                  id="breed"
                  name="breed"
                  type="text"
                  label="Raza"
                  placeholder="Ingresa la raza de la mascota"
                />
                <ErrorMessage name="breed" component="div" className="text-red-500" />
              </div>
              <div className="space-y-2">
                <TextInput
                  id="personality"
                  name="personality"
                  type="text"
                  label="Personalidad"
                  placeholder="Ingresa la personalidad de la mascota"
                />
                <ErrorMessage name="personality" component="div" className="text-red-500" />
              </div>
              <div className="space-y-2">
                <TextInput
                  id="history"
                  name="history"
                  type="text"
                  label="Historia"
                  placeholder="Ingresa la historia de la mascota"
                />
                <ErrorMessage name="history" component="div" className="text-red-500" />
              </div>
              <div className="space-y-2">
                <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                  Imágenes
                </label>
                <FieldArray name="images">
              {({ push, remove }) => (
                <div>
                  {values.images.map((image, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <input
                        id={`images[${index}]`}
                        name={`images[${index}]`}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, setFieldValue, index)}
                      />
                      {index === values.images.length - 1 && values.images.length < 4 && (
                        <Button type="button" onClick={() => push(null)}>+</Button>
                      )}
                      {index > 0 && (
                        <Button type="button" onClick={() => remove(index)}>-</Button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>
                <ErrorMessage name="images" component="div" className="text-red-500" />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#1f9063] hover:bg-[#156947] text-white font-bold text-base py-6"
                disabled={loading}
              >
                {loading ? "Cargando..." : "Agregar Mascota"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddPetForm
