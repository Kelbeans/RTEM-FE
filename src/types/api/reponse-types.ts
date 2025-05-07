export type APIResponse<T = {}> = {
  httpStatus: string;
  message: string;
  object: T;
};

export type AuthenticateResponse = {
  object: {
    firstName: string;
  };
  httpStatus: string;
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}