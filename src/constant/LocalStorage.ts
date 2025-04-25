/*import EncryptedStorage from "react-native-encrypted-storage";
import { AuthenticateResponse } from "../api/AuthController";

export interface UserSession {
  token: string;
  userId: string;
  userName: string;
  roles: Array<string>;
}

export const storeUserSession = async (param: AuthenticateResponse) => {
  console.log("%^&%^&", JSON.stringify(param));
  try {
    await EncryptedStorage.setItem(
      "user_session",
      JSON.stringify({
        token: param.jwt,
        userId: param.userId,
        userName: param.userName,
        fullName: param?.fullName ?? "",
        roles: param.roles,
        areaName: param.areaName,
      })
    );
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

export const retrieveUserSession = async (): Promise<
  UserSession | undefined
> => {
  try {
    const session = await EncryptedStorage.getItem("user_session");
    if (session !== undefined && session !== null) {
      return handleSessions.get(sessionKeys.upin).then((data) => {
        return data !== null ? JSON.parse(session) : null;
      });
    }
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
*/