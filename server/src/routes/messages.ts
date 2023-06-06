import express from "express";
import { getMessageBySubject, sendMessage } from "../controllers";

const messagesRouter = express.Router();

messagesRouter.post("/send", sendMessage);
messagesRouter.get("/message", getMessageBySubject);

export { messagesRouter };
