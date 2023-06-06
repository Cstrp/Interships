import axios from "axios";

const url = "http://localhost:1337/api";

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
