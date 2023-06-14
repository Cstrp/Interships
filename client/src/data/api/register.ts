import { User } from "../types";
import { api } from "./apiInterceptor.ts";

export const register = async (registerData: User) => {
  try {
    const res = await api.post<{ message: string }>(
      "/auth/register",
      registerData
    );

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
