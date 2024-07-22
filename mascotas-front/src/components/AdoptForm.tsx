import { Button } from "@/components/ui/button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextAreaInput, TextInput } from "./InputElements";

const validationSchema = Yup.object({
  name: Yup.string().required("Nombre y apellido son obligatorios"),
  city: Yup.string().required("Ciudad es obligatorio"),
  email: Yup.string().email("Correo inválido").required("Correo es obligatorio"),
  phone: Yup.string().required("Teléfono es obligatorio"),
  familyDescription: Yup.string(),
});

const AdoptForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        city: "",
        email: "",
        phone: "",
        familyDescription: "",
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
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>
          <div className="space-y-2">
            <TextInput
              id="city"
              name="city"
              type="text"
              label="Ciudad"
              placeholder="Ingresa tu ciudad"
            />
            <ErrorMessage name="city" component="div" className="text-red-500" />
          </div>
          <div className="space-y-2">
            <TextInput
              id="email"
              name="email"
              type="email"
              label="Correo electrónico"
              placeholder="Ingresa tu correo electrónico"
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>
          <div className="space-y-2">
            <TextInput
              id="phone"
              name="phone"
              type="text"
              label="Teléfono"
              placeholder="Ingresa tu teléfono"
            />
            <ErrorMessage name="phone" component="div" className="text-red-500" />
          </div>
          <div className="space-y-2">
            <TextAreaInput
              id="familyDescription"
              name="familyDescription"
              placeholder="Descripción de tu familia"
              label="Describe brevemente cuántas personas componen tu familia y sus edades (opcional)"
            />
            <ErrorMessage name="familyDescription" component="div" className="text-red-500" />
          </div>
          <Button type="submit" className="w-full bg-[#1f9063] hover:bg-[#156947] text-white font-bold text-base py-6" disabled={isSubmitting}>
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AdoptForm;
