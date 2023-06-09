import { config } from "dotenv";

config();

export const PORT = process.env.PORT || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_USERNAME = process.env.DB_USERNAME || "";
