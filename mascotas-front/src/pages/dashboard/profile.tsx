import BackOffice from "@/layout/BackOffice"
import React, { useState } from "react"
import { useFormik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { MenuOpenIcon } from "@/icons"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { FormInput } from "@/components/InputElements"

const validationSchema = Yup.object({
  name: Yup.string().required("Nombre es requerido"),
  email: Yup.string().required("E-mail es requerido").email("E-mail no válido"),
  rol: Yup.string().required("El rol es requerido"),
  password: Yup.string()
    .required("Contraseña es requerida")
    .min(6, "Contraseña debe tener al menos 6 caracteres"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
    .required("Confirmar contraseña es requerido"),
})

const Index = () => {
  const [isEditing, setIsEditing] = useState(true)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "mi@email.com",
    rol: "admin",
    password: "********",
    password_confirmation: "********",
  })

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      rol: user.rol,
      password: "",
      password_confirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const handleClick = () => {
    setIsEditing(!isEditing)
  }

  return (
    <BackOffice>
      <div className="flex flex-col gap-6 p-6 md:p-8 lg:p-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Preferencias</h1>
          <div className="flex items-center gap-4">
            <Button onClick={handleClick} variant="outline" size="sm">
              {isEditing ? "Edit" : <MenuOpenIcon />}
            </Button>
            <Button
              onClick={() => alert("hacer lógica de eliminar")}
              variant="destructive"
              size="sm"
            >
              Delete
            </Button>
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1"
        >
          <FormInput
            id="name"
            label="Nombre"
            disabled={isEditing}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.name && formik.touched.name
                ? formik.errors.name
                : ""
            }
          />

          <FormInput
            id="email"
            label="E-mail"
            disabled={isEditing}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.email && formik.touched.email
                ? formik.errors.email
                : ""
            }
          />

          <FormInput
            id="rol"
            label="Rol"
            disabled={isEditing}
            value={formik.values.rol}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.rol && formik.touched.rol ? formik.errors.rol : ""
            }
          />

          {!isEditing ? (
            <>
              <FormInput
                id="password"
                label="password"
                disabled={isEditing}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.password && formik.touched.password
                    ? formik.errors.password
                    : ""
                }
              />

              <FormInput
                id="password_confirmation"
                label="password_confirmation"
                disabled={isEditing}
                value={formik.values.password_confirmation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.password_confirmation &&
                  formik.touched.password_confirmation
                    ? formik.errors.password_confirmation
                    : ""
                }
              />
            </>
          ) : null}

          {!isEditing ? <Button type="submit">Save</Button> : null}
        </form>
      </div>
    </BackOffice>
  )
}

export default Index
