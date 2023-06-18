import { Request, Response } from "express";
import { errorHandler } from "../utils";
import Item from "../models/item";
import Collection from "../models/collection";
import { uploadImage } from "../utils/uploadImage";
import { Likes, User } from "../types";

const getItemByCollectionId = async (req: Request, res: Response) => {
  try {
    const collectionId = req.params.id;
    const item = await Item.find({ collectionId }).exec();

    if (!item) {
      errorHandler(res, 404, "Item or items not found!");
    }

    res.status(200).json(item);
  } catch (err) {
    errorHandler(res, 500, `Internal Server Error: ${err}`);
  }
};

const getItemById = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;
    const item = await Item.findById(itemId).exec();

    if (!item) {
      errorHandler(res, 404, "Item not found");
      return;
    }

    res.status(200).json(item);
  } catch (error) {
    errorHandler(res, 500, `Internal server Error ${error}`);
  }
};

const createItem = async (req: Request, res: Response) => {
  try {
    const { collectionId, title, tags, image, fields, likes } = req.body;

    const collection = await Collection.findById(collectionId).exec();

    let imageUrl;

    if (image) {
      imageUrl = await uploadImage(image);
    }

    if (!collection) {
      errorHandler(res, 404, "Collection not found");
      return;
    }

    const newItem = await new Item({
      collectionId,
      title,
      tags,
      likes,
      image: imageUrl,
      fields: { ...collection?.fields, ...fields },
    }).save();

    collection.items.push(newItem);
    await collection.save();

    res.status(201).json({ message: "New item has been created!", newItem });
  } catch (error) {
    errorHandler(res, 500, `Internal server error ${error}`);
  }
};

const likeItem = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;
    const user = req.user as User;

    const item = await Item.findById(itemId).exec();

    if (!item) {
      errorHandler(res, 404, "Item not found");
      return;
    }

    const foundedLike = item.likes.find(
      like => like.userId.toString() === user._id.toString()
    );

    if (foundedLike) {
      foundedLike.isLiked = !foundedLike.isLiked;
    } else {
      const newLike: Likes = {
        userId: user._id,
        itemId,
        isLiked: true,
      };

      item.likes.push(newLike);
    }

    await item.save();

    res.status(200).json({ message: "Item liked/unliked" });
  } catch (error) {
    errorHandler(res, 500, `Internal server error ${error}`);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const updatedItem = await Item.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    if (!updatedItem) {
      errorHandler(res, 404, "Item is not found & not updated");
      return;
    }

    res.status(200).json({ message: "Item has been updated!", updatedItem });
  } catch (error) {
    errorHandler(res, 500, `Internal server error ${error}`);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;
    const item = await Item.findOne({ _id: itemId });

    if (!itemId && !item) {
      errorHandler(res, 404, `Item ${itemId} not found`);
      return;
    }

    item?.deleteOne();

    res.status(200).json({ message: "Item has been deleted" });
  } catch (error) {
    errorHandler(res, 500, `Internal server error ${error}`);
  }
};

export {
  getItemByCollectionId,
  getItemById,
  createItem,
  likeItem,
  updateItem,
  deleteItem,
};
