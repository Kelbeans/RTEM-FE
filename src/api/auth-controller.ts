import { BASE_API } from "@/utils/backend-url";
import { AxiosResponse } from "axios";
import { AuthenticatePayload, AuthenticateResponse, APIResponse } from "@/types/api";
import apiManager from "./api-manager";

export const authenticateUser = async (
  data: AuthenticatePayload
): Promise<AxiosResponse<AuthenticateResponse>> => {
  return apiManager
    .post<APIResponse<AuthenticateResponse>>(
      `${BASE_API}/v1/api/authentication`,
      data
    )
    .then((res) => res)
    .catch((err) => err);
};