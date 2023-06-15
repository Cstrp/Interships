import { Request, Response } from "express";
import { errorHandler } from "../utils";
import { User } from "../types";
import Item from "../models/item";
import Comment from "../models/comment";

const createComment = async (req: Request, res: Response) => {
  try {
    const user = req.user as User;
    const { itemId, content } = req.body;
    const item = await Item.findById(itemId).exec();

    if (!user && !item) {
      errorHandler(res, 404, "User or Item not found");
    }

    const newComment = await new Comment({
      userId: user._id,
      itemId,
      content,
    }).save();

    // item.comments.push(newComment);
    // await item.save();

    res.status(201).json({ message: "New comment was created!", newComment });
  } catch (error) {
    errorHandler(res, 500, `Internal server error ${error}`);
  }
};

const updateComment = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    errorHandler(res, 500, `Internal server error ${error}`);
  }
};

const removeComment = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    errorHandler(res, 500, `Internal server error ${error}`);
  }
};

export { createComment, updateComment, removeComment };
