import { Collections } from "../types";
import { api } from "./apiInterceptor.ts";

export const createCollection = async (collection: Collections) => {
  try {
    const res = await api.post<{
      message: string;
      newCollection: Collections;
    }>("/collections/create", collection);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
