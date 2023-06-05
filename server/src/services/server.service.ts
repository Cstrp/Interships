import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { userRouter } from "../routes/user";
import { messageRouter } from "../routes/message";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use("/api", userRouter);
app.use("/api", messageRouter);

export { app };
