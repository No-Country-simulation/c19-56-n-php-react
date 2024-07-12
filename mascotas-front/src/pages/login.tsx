import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "sonner";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/backend";
import { useAuthStore } from "@/store/auth/user.store";
import { useEffect, useState } from "react";
import { usePageContextStore } from "@/store/auth/pageContext.store";

export default function Component() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const pageContext = usePageContextStore((state) => state.pageContext);

  useEffect(() => {
    if (user && token) {
      if (pageContext) {
        router.push(pageContext);
      } else {
        router.push("/dashboard");
      }
    }
  }, [user, token, pageContext, router]);

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
            email: Yup.string()
            .required("Obligatorio!")
              .email("Debe ser un correo válido!"),
            password: Yup.string().required("Obligatorio!"),
          })}
          onSubmit={async (values) => {
            setLoading(true);
            try {
              const response = await login(values.email, values.password);
              if (response.status === 200) {
                setUser(response.data.data);
                setToken(response.data.access_token);
                toast.success(`¡Bienvenido!`);
              }
            } catch (error) {
              if (error instanceof Error) {
                toast.error(error.message);
              } else {
                toast.error("Ocurrió un error inesperado.");
              }
            } finally {
              setLoading(false);
            }
          }}
          />
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
            email: Yup.string()
              .required("Obligatorio!")
              .email("Debe ser un correo válido!"),
            password: Yup.string().required("Obligatorio!"),
          })}
          onSubmit={async (values) => {
            setLoading(true);
            try {
              const response = await login(values.email, values.password);
              if (response.status === 200) {
                setUser(response.data.data);
                setToken(response.data.access_token);
                toast.success(`¡Bienvenido!`);
              }
            } catch (error) {
              if (error instanceof Error) {
                toast.error(error.message);
              } else {
                toast.error("Ocurrió un error inesperado.");
              }
            } finally {
              setLoading(false);
            }
          }}
        >
          <Form>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ejemplo@dominio.com"
                  as={Input}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Field
                  name="password"
                  id="password"
                  type="password"
                  placeholder="********"
                  as={Input}
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Button type="submit" className="w-full">
                {loading ? "Cargando" : "Iniciar sesión"}
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
  );
}