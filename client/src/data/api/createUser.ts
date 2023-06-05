import { User } from "../types";
import { api } from "./api.ts";

export const createUser = async (user: User) => {
  try {
    const res = await api.post<User>("/create", user);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
