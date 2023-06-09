import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import { messagesRouter, usersRouter } from "../routes";

const app = express();

app.use(cors({ origin: "*" }));
app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/", usersRouter);
app.use("/", messagesRouter);

export { app };
