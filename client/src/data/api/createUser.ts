import { api } from "./api.ts";
import { User } from "../types";

export const createUser = async ({ userName }: User) => {
  try {
    const res = await api.post("/create", { userName });

    console.log(userName);

    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
