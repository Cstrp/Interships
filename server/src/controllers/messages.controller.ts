import { Request, Response } from "express";
import { Message as Msg } from "../types";
import Message from "../models/message";

const getMessageBySender = async (req: Request, res: Response) => {
  try {
    const { sender } = req.body;

    if (!sender) {
      res.status(400).json({ message: "Missing req parameters" });
      return;
    }

    const messages = await Message.find({ sender }).exec();

    if (!messages || messages.length === 0) {
      res.status(404).json({ message: "No messages found" });
      return;
    }

    res.status(200).json(messages);
  } catch (error) {
    console.warn(error);
  }
};

const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find().exec();

    if (!messages) res.status(404).json({ message: "Oops..." });

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
  }
};

const getMessageBySubject = async (req: Request, res: Response) => {
  try {
    const { subject }: Pick<Msg, "subject"> = req.body;

    if (!subject) {
      res.status(400).json({ message: "Missing required parameter" });
      return;
    }

    const messages = await Message.find({ subject }).exec();

    if (!messages || messages.length === 0) {
      res.status(404).json({ message: "No messages found" });
      return;
    }

    res.status(200).json(messages);
  } catch (error) {
    console.warn(error);
  }
};

const sendMessage = async (req: Request, res: Response) => {
  try {
    const message: Msg = req.body;

    if (!message) {
      res.status(400).json({ message: "Oooooh! Something went wrong!" });
    }

    const newMessage = await Message.create(message);
    res.status(201).json(newMessage);
  } catch (error) {
    console.warn(error);
  }
};

export { sendMessage, getMessages, getMessageBySender, getMessageBySubject };
