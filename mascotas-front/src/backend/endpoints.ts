import { urlBase } from "./";

export const login = async (email: string, password: string) => {
  try {
    const response = await urlBase.post(
      `/api/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': '*',
        },
      }
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

// export const login = async (email: string, password: string) => {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("Error del backend:", errorData.error);
//       throw new Error(errorData.error);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error de red o desconocido", error);
//     throw new Error(
//       "Ocurrió un error al intentar realizar la operación. Por favor, inténtalo de nuevo."
//     );
//   }
// };
