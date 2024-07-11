import { urlBase } from "./";

export const login = async (email: string, password: string) => {
  try {
    const response = await urlBase.post(
      `/api/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      const data = response.data;
      return data;
    } else {
      return response;
    }
  } catch (error: any) {
    // Verifica si el error tiene una respuesta y si esa respuesta tiene un cuerpo con el mensaje de error
    if (error.response && error.response.data && error.response.data.error) {
      console.error("Error del backend:", error.response.data.error);
      return { error: error.response.data.error };
    } else {
      // Para otros tipos de errores (como errores de red), devuelve un mensaje genérico o el error completo
      console.error("Error de red o desconocido", error);
      return {
        error:
          "Ocurrió un error al intentar realizar la operación. Por favor, inténtalo de nuevo.",
      };
    }
  }
};
