import { Request, Response } from "express";
import { Message as Msg } from "../types";
import Message from "../models/message";

const sendMessage = async (req: Request, res: Response) => {
  try {
    const message: Msg = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const newMessage = await Message.create(message);

    res.status(200).json({ message: `Message send successfully!`, newMessage });
  } catch (err) {
    console.log(err);
  }
};

const getMessageBySubject = async (req: Request, res: Response) => {
  try {
    const { subject } = req.body;

    if (!subject) {
      return res.status(400).json({ error: "Subject is required" });
    }

    const messages = await Message.find({ subject }).exec();

    if (!messages) {
      return res.status(404).json({ error: "No messages found" });
    }

    res.status(200).json({ messages });
  } catch (err) {
    console.log(err);
  }
};

export { sendMessage, getMessageBySubject };
