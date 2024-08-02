import { Button } from "@/components/ui/button";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextInput, TextAreaInput } from "./InputElements";
import { contact } from "@/backend";
import { toast } from "sonner";
import { useState } from "react";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Nombre y apellido es obligatorio"),
  city: Yup.string().required("Dirección es obligatorio"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Correo electrónico es obligatorio"),
  phone: Yup.string().required("Teléfono es obligatorio"),
  message: Yup.string().required("Mensaje es obligatorio"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const response = await contact(
        values.fullName,
        values.email,
        values.phone,
        values.message,
        values.city
      );
      if (response.status === 201) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Ocurrió un error inesperado."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={{
        fullName: "",
        city: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div className="space-y-2">
            <TextInput
              id="fullName"
              name="fullName"
              type="text"
              label="Nombre y apellido"
              placeholder="Ingresa tu nombre completo"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="space-y-2">
            <TextInput
              id="city"
              name="city"
              type="text"
              label="Dirección"
              placeholder="Ingresa tu Dirección"
            />
            <ErrorMessage
              name="city"
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
              id="phone"
              name="phone"
              type="text"
              label="Teléfono"
              placeholder="Ingresa tu teléfono"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="space-y-2">
            <TextAreaInput
              id="message"
              name="message"
              label="Mensaje"
              placeholder="Escribe tu mensaje"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#1f9063] hover:bg-[#156947] text-white font-bold text-base py-6"
            disabled={isSubmitting}
          >
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
