import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email:</Label>
              <Field
                id="email"
                name="email"
                type="email"
                as={Input}
                autoComplete="email"
                placeholder="tu-correo@ejemplo.com"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña:</Label>
            <Field
              id="password"
              name="password"
              type="password"
              as={Input}
              autoComplete="current-password"
              placeholder="••••••••"
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Iniciar Sesión
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
