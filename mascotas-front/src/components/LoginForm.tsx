import React from "react"
import * as Yup from "yup"
import { toast } from "sonner"
import { login } from "@/backend"
import { Formik, Form } from "formik"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { TextInput } from "@/components/InputElements"
import { useAuthStore } from "@/store/auth/user.store"
import { usePageContextStore } from "@/store/auth/pageContext.store"

const LoginForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { setUser, setToken, user, token } = useAuthStore((state) => ({
    setUser: state.setUser,
    setToken: state.setToken,
    user: state.user,
    token: state.token,
  }))

  const pageContext = usePageContextStore((state) => state.pageContext)

  useEffect(() => {
    if (user && token) {
      router.push(pageContext || "/")
    }
  }, [user, token, pageContext, router])

  const initialValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Obligatorio!")
      .email("Debe ser un correo válido!"),
    password: Yup.string().required("Obligatorio!"),
  })

  const handleSubmit = async (values: any) => {
    setLoading(true)
    try {
      const response = await login(values.email, values.password)
      if (response.status === 200) {
        setUser(response.data.data)
        setToken(response.data.access_token)
        toast.success("¡Bienvenido!")
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Ocurrió un error inesperado."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-6">
        <div className="space-y-2">
          <TextInput
            id="email"
            name="email"
            type="email"
            label="Correo electrónico"
            placeholder="Ingresa tu correo electrónico"
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
        </div>
        <Button type="submit" className="w-full bg-[#1f9063] hover:bg-[#156947] text-white font-bold text-base py-6">
          {loading ? "Cargando" : "Iniciar sesión"}
        </Button>
      </Form>
    </Formik>
  )
}

export default LoginForm
