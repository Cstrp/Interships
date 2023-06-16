import { Collections } from "../types";
import { api } from "./apiInterceptor.ts";

export const updateCollection = async (
  collectionId: string,
  collection: Collections
) => {
  try {
    const res = await api.put<{ message: string }>(
      `/collections/${collectionId}`,
      collection
    );

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
