import Token from "../models/token";
import { Token as T } from "../types";

const getToken = async (userId: string, tokenId: string) => {
  try {
    const token = await Token.findOne({ userId, tokenId });

    if (!token) return new Error("Token is not found");

    return token;
  } catch (error) {
    console.log(error);
  }
};

const upsertToken = async (token: T) => {
  await Token.findOneAndUpdate(
    { userId: token.userId },
    { $set: token },
    { upsert: true, new: true }
  );
};

export { getToken, upsertToken };
