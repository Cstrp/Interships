import axios from "axios";
import { url as baseURL } from ".";

export const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
