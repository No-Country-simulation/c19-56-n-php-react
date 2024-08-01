import { PetCreate } from "@/interfaces";
import { urlBase } from "./";
import { toast } from "sonner";

export const login = async (email: string, password: string) => {
  try {
    const response = await urlBase.post(
      `/api/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error) {
      // console.error("Error del backend:", error.response.data.error);
      throw new Error(error.response.data.error);
    } else {
      console.error("Error de red o desconocido", error);
      throw new Error(
        "Ocurrió un error al intentar realizar la operación. Por favor, inténtalo de nuevo."
      );
    }
  }
};

export const createPets = async (pet: FormData, token: string) => {
  try {
    const response = await urlBase.post(`/api/pets`, pet, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    let errorMessage =
      "Ocurrió un error al intentar realizar la operación. Por favor, inténtalo de nuevo.";
    if (error.response && error.response.data) {
      if (error.response.data.error) {
        errorMessage = error.response.data.error;
      } else if (error.response.data.errors) {
        const errors = error.response.data.errors;
        const errorMessages = Object.keys(errors)
          .map((key) => `${key}: ${errors[key].join(", ")}`)
          .join("\n");
        errorMessage = `${error.response.data.message}\n${errorMessages}`;
      }
    } else {
      console.error("Error de red o desconocido", error);
    }
    // toast.error(errorMessage);
    throw new Error(errorMessage);
  }
};
export const register = async (
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
  role: string
) => {
  try {
    const response = await urlBase.post(
      `/api/register`,
      { name, email, password, password_confirmation, role },
      { headers: { "Content-Type": "application/json" } }
    );
    return response;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error) {
      console.error("Error del backend:", error.response.data.error);
      throw new Error(error.response.data.error);
    } else {
      console.error("Error de red o desconocido", error);
      throw new Error(
        "Ocurrió un error al intentar realizar la operación. Por favor, inténtalo de nuevo."
      );
    }
  }
};
export const createImgPets = async (pet: any, token: string) => {
  try {
    const response = await urlBase.post(`/api/pets-images`, pet, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    let errorMessage =
      "Ocurrió un error al intentar realizar la operación. Por favor, inténtalo de nuevo.";
    if (error.response && error.response.data) {
      if (error.response.data.error) {
        errorMessage = error.response.data.error;
      } else if (error.response.data.errors) {
        const errors = error.response.data.errors;
        const errorMessages = Object.keys(errors)
          .map((key) => `${key}: ${errors[key].join(", ")}`)
          .join("\n");
        errorMessage = `${error.response.data.message}\n${errorMessages}`;
      }
    } else {
      console.error("Error de red o desconocido", error);
    }
    // toast.error(errorMessage);
    throw new Error(errorMessage);
  }
}

export const getPetOne = async (id: number) => {
  try {
    const response = await urlBase.get(`/api/pets/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error) {
      console.error("Error del backend:", error.response.data.error);
      throw new Error(error.response.data.error);
    } else {
      console.error("Error de red o desconocido", error);
      throw new Error(
        "Ocurrió un error al intentar realizar la operación. Por favor, inténtalo de nuevo."
      );
    }
  }
};

export const getPets = async () => {
  try {
    const response = await urlBase.get(`/api/pets`);
    return response.data.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error) {
      console.error("Error del backend:", error.response.data.error);
      throw new Error(error.response.data.error);
    } else {
      console.error("Error de red o desconocido", error);
      throw new Error(
        "Ocurrió un error al intentar realizar la operación. Por favor, inténtalo de nuevo."
      );
    }
  }
};
