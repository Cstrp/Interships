import express from "express";
import {
  getMessageBySender,
  getMessageBySubject,
  getMessages,
  sendMessage,
} from "../controllers";

const messageRouter = express.Router();

messageRouter.post("/sendMessage", sendMessage);
messageRouter.get("/getMessageBySender", getMessageBySender);
messageRouter.get("/getMessages", getMessages);
messageRouter.get("/getMessageBySubject", getMessageBySubject);

export { messageRouter };
