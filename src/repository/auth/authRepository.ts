import { ConvertToModelUser, ModelUser } from "@/src/model/modelUser";
import { postLogin, postPassword } from "@/src/core/api/baseApi";
import {
  ConvertToModelUserPassword,
  ModelUserPassword,
} from "@/src/model/modelUserPassword";

export const login = async (email: string): Promise<ModelUser | null> => {
  const resp = await postLogin("/auth/login-v2", {
    email,
  });

  console.log("Response Repository Auth", resp);

  if (resp === null) {
    return null;
  }

  return ConvertToModelUser.toModelUser(JSON.stringify(resp));
};

export const fetchPassword = async (
  email: string,
  password: string,
  otp: number,
): Promise<ModelUserPassword | null> => {
  const resp = await postPassword("/auth/password-v2", {
    email,
    password,
    otp,
  });

  console.log("Response Repository Auth Password", resp);

  if (resp === null) {
    return null;
  }

  return ConvertToModelUserPassword.toModelUserPassword(JSON.stringify(resp));
};
