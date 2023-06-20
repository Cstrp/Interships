import { Request, Response } from "express";
import { errorHandler } from "../utils";
import Collections from "../models/collection";
import { User } from "../types";
import { uploadImage } from "../utils/uploadImage";
import Item from "../models/item";

const getCollections = async (req: Request, res: Response) => {
  try {
    const collections = await Collections.find().populate("items").exec();

    collections.sort((a, b) => b.items.length - a.items.length);

    res.status(200).json({ collections });
  } catch (error) {
    errorHandler(res, 500, `Internal Server Error ${error}`);
  }
};

const createCollection = async (req: Request, res: Response) => {
  try {
    const user = req.user as User;
    const { imageURL, name, description, theme, fields } = req.body;
    const img = req.file;

    if (!user) {
      errorHandler(res, 401, "Unauthorized!");
      return;
    }

    let image;

    if (imageURL) {
      image = await uploadImage(imageURL);
    } else if (img) {
      image = await uploadImage(img.path);
    }

    const newCollection = await new Collections({
      userId: user._id,
      name,
      description,
      theme,
      image,
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
    const user = req.user as User;

    if (!user) {
      errorHandler(res, 401, "Unauthorized!");
      return;
    }

    const updatedCollection = await Collections.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: user._id,
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

    const collection = await Collections.findOne({
      _id: req.params.id,
      userId: user._id,
    });

    if (collection) {
      collection.deleteOne();
      await Item.deleteMany({
        collectionId: req.params.id,
      });

      res.status(200).json({ message: "Collection has been deleted" });
    } else {
      errorHandler(res, 404, "Collection not found & not removed!");
    }
  } catch (error) {
    console.log(error);
  }
};

export { getCollections, createCollection, updateCollection, removeCollection };
