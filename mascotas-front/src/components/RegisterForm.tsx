import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
});

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
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Field
                id="name"
                name="name"
                type="text"
                as={Input}
                autoComplete="name"
                placeholder="John Doe"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Field
                id="email"
                name="email"
                type="email"
                as={Input}
                autoComplete="email"
                placeholder="you@example.com"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
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
          <div className="space-y-2">
            <Label htmlFor="password_confirmation">Confirmar contraseña</Label>
            <Field
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              as={Input}
              autoComplete="current-password"
              placeholder="••••••••"
            />
            <ErrorMessage name="password_confirmation" component="div" className="text-red-500" />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Registrarse
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
