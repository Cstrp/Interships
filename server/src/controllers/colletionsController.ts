import { Request, Response } from "express";
import { errorHandler } from "../utils";
import Collections from "../models/collection";
import { User } from "../types";
import { uploadImage } from "../utils/uploadImage";
import Item from "../models/item";

const getCollections = async (req: Request, res: Response) => {
  try {
    const collections = await Collections.find().populate("items").exec();

    res.status(200).json({ collections });
  } catch (error) {
    errorHandler(res, 500, `Internal Server Error ${error}`);
  }
};

const createCollection = async (req: Request, res: Response) => {
  try {
    const user = req.user as User;
    const { imageUrl, name, description, theme, fields } = req.body;

    if (!user) {
      errorHandler(res, 401, "Unauthorized!");
      return;
    }

    let image;

    if (imageUrl) {
      image = await uploadImage(imageUrl);
    }

    const newCollection = await new Collections({
      userId: user._id,
      name,
      description,
      theme,
      imageUrl: image,
      fields,
    }).save();

    res
      .status(201)
      .json({ message: "New collection has been created!", newCollection });
  } catch (err) {
    errorHandler(res, 500, `Internal Server Error ${err}`);
  }
};

const updateCollection = async (req: Request, res: Response) => {
  try {
    const updatedCollection = await Collections.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
      { new: true }
    );

    if (!updatedCollection) {
      errorHandler(res, 404, "Collection not found & not updated");
    }

    res
      .status(200)
      .json({ message: "Collection has been updated!", updatedCollection });
  } catch (error) {
    errorHandler(res, 500, `Internal Server Error ${error}`);
  }
};

const removeCollection = async (req: Request, res: Response) => {
  try {
    const user = req.user as User;

    if (!user) {
      errorHandler(res, 401, "Unauthorized!");
      return;
    }

    const collectionId = req.params.collectionId;
    const removeRes = await Collections.deleteOne({
      _id: collectionId,
      userId: user._id,
    });

    await Item.deleteMany({ collectionId });

    if (removeRes.deletedCount === 0) {
      errorHandler(res, 404, "Collection is not found");
    }

    res.status(200).json({ message: "Collection has been deleted" });
  } catch (error) {
    errorHandler(res, 500, `Internal Server Error ${error}`);
  }
};

export { getCollections, createCollection, updateCollection, removeCollection };
