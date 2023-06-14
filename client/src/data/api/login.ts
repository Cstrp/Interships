import { api } from "./apiInterceptor.ts";

export const login = async (loginData: { email: string; password: string }) => {
  try {
    const res = await api.post("/auth/login", loginData);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
