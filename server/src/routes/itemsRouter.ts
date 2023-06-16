import express from "express";
import {
  createItem,
  deleteItem,
  getItemByCollectionId,
  updateItem,
} from "../controllers/itemController";
import passport from "passport";

const itemsRouter = express.Router();

itemsRouter.get("/items/:id", getItemByCollectionId);

itemsRouter.post(
  "/items/create",
  passport.authenticate("jwt", { session: false }),
  createItem
);

itemsRouter.put(
  "/item/:id",
  passport.authenticate("jwt", { session: false }),
  updateItem
);

itemsRouter.delete(
  "/items/:id",
  passport.authenticate("jwt", { session: false }),
  deleteItem
);

export { itemsRouter };
