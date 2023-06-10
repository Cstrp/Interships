import axios from "axios";

const url = "https://messages-production-883c.up.railway.app/api";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: url,
});

export { api };
