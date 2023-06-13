import dotenv from "dotenv";

dotenv.config();

const PORT: string | number = process.env.PORT || 3001;
const DB_HOST: string = process.env.DB_HOST || "";
const DB_NAME: string = process.env.DB_NAME || "";
const DB_USER: string = process.env.DB_USER || "";
const DB_PASSWORD: string = process.env.DB_PASSWORD || "";

export { PORT, DB_USER, DB_PASSWORD, DB_NAME, DB_HOST };
