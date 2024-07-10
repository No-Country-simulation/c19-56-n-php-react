import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Form, Formik } from "formik"
import * as Yup from 'yup'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md pb-4">
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
          <CardDescription>
            Ingresa tu correo electrónico y contraseña para acceder a tu cuenta.
          </CardDescription>
        </CardHeader>

        <Formik
          className="space-y-4"
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Obligatorio!")
              .typeError("Debe ser un correo!").email(),
            password: Yup.string()
              .required("Obligatorio!")
          })}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ejemplo@dominio.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input name="password" id="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Button type="submit" className="w-full">
                Iniciar sesión
              </Button>
            </CardFooter>
          </Form>
        </Formik>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          ¿Aún no tienes una cuenta?{" "}
          <Link
            href="#"
            className="font-medium underline underline-offset-4"
            prefetch={false}
          >
            Regístrate
          </Link>
        </div>
      </Card>
    </div>
  )
}