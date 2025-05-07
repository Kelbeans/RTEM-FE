import { AuthenticateResponse } from "@/types/type-definition/api/reponse-types";


export interface UserSession {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}

export const storeUserSession = async (param: AuthenticateResponse) => {
  console.log("Storing user session:", JSON.stringify(param));
  try {
    localStorage.setItem(
      "user_session",
      JSON.stringify({
        id: param.id,
        email: param.email,
        password: param.password,
        firstName: param?.firstName ?? "",
        lastName: param.lastName,
        token: param.token,
      })
    );
  } catch (error) {
    console.error("Error storing user session:", error);
  }
};

// export const retrieveUserSession = async (): Promise<
//   UserSession | undefined
// > => {
//   try {
//     const session = await EncryptedStorage.getItem("user_session");
//     if (session !== undefined && session !== null) {
//       return handleSessions.get(sessionKeys.upin).then((data) => {
//         return data !== null ? JSON.parse(session) : null;
//       });
//     }
//   } catch (error) {
//     console.log(JSON.stringify(error));
//   }
// };
