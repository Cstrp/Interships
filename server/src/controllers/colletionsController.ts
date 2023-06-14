import { Request, Response } from "express";
import { errorHandler } from "../utils";

const getCollections = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    errorHandler(res, 500, `Internal Server Error ${error}`);
  }
};

const createCollection = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    errorHandler(res, 500, `Internal Server Error ${err}`);
  }
};

const updateCollection = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    errorHandler(res, 500, `Internal Server Error ${error}`);
  }
};

const removeCollection = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    errorHandler(res, 500, `Internal Server Error ${error}`);
  }
};

export { getCollections, createCollection, updateCollection, removeCollection };
