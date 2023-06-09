import { config } from "dotenv";

config();

export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_USERNAME = process.env.DB_USERNAME || "";
