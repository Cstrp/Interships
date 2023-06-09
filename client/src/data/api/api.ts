import axios from "axios";

const url = "http://localhost:1337/api";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: url,
});

export { api };
