import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import { messagesRouter, usersRouter } from "../routes";

const app = express();

app.use(json());
app.use(cors({ origin: "*" }));
app.use(urlencoded({ extended: true }));

app.use("/api", usersRouter);
app.use("/api", messagesRouter);

export { app };
