import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config";

const generateToken = (id: number, email: string) => {
  return jwt.sign({ email, id }, SECRET_KEY, {
    expiresIn: "777m",
  });
};

export { generateToken };
