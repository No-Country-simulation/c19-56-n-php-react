import { urlBase } from "./";

export const login = async (email: string, password: string) => {
  try {
    const response = await urlBase.post(
      `/api/login`,
      { email, password },
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
