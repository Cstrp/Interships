import express from "express";
import {
  createItem,
  deleteItem,
  getItemByCollectionId,
  likeItem,
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

itemsRouter.post(
  "/items/:id/like",
  passport.authenticate("jwt", { session: false }),
  likeItem
);

itemsRouter.put(
  "/items/:id",
  passport.authenticate("jwt", { session: false }),
  updateItem
);

itemsRouter.delete(
  "/items/:id",
  passport.authenticate("jwt", { session: false }),
  deleteItem
);

export { itemsRouter };
