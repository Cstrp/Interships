import express from "express";
import { getMessages, sendMessage } from "../controllers";

const messagesRouter = express.Router();

messagesRouter.post("/send", sendMessage);
messagesRouter.get("/messages", getMessages);

export { messagesRouter };
