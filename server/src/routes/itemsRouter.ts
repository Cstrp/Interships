import express from "express";
import {
  createItem,
  deleteItem,
  updateItem,
} from "../controllers/itemController";
import passport from "passport";

const itemsRouter = express.Router();

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
