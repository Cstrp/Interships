import { Request, Response } from "express";
import { errorHandler } from "../utils";

const addLike = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    errorHandler(res, 500, `Internal Server Error ${error}`);
  }
};

const removeLike = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    errorHandler(res, 500, `Internal Server Error ${error}`);
  }
};

export { addLike, removeLike };
