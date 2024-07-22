import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { TextInput } from "./InputElements"

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
})

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "user",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div className="space-y-2">
            <TextInput
              id="name"
              name="name"
              type="text"
              label="Nombre y apellido"
              placeholder="Ingresa tu nombre completo"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="space-y-2">
            <TextInput
              id="email"
              name="email"
              type="email"
              label="Correo electrónico"
              placeholder="Ingresa tu correo electrónico"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="space-y-2">
            <TextInput
              id="password"
              name="password"
              type="password"
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="space-y-2">
            <TextInput
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              label='Confirmar contraseña'
              placeholder="Confirma tu contraseña"
            />
            <ErrorMessage
              name="password_confirmation"
              component="div"
              className="text-red-500"
            />
          </div>
          <Button type="submit" className="w-full bg-[#1f9063] hover:bg-[#156947] text-white font-bold text-base py-6" disabled={isSubmitting}>
            Registrarse
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm
