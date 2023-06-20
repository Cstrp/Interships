import express from "express";
import {
  createCollection,
  getCollections,
  removeCollection,
  updateCollection,
} from "../controllers/colletionsController";
import passport from "passport";
import { _muilter } from "../middlewares/upload";

const collectionsRouter = express.Router();

collectionsRouter.get("/collections", getCollections);

collectionsRouter.post(
  "/collections/create",
  _muilter.single("image"),
  passport.authenticate("jwt", { session: false }),
  createCollection
);

collectionsRouter.put(
  "/collections/:id",
  _muilter.single("image"),
  passport.authenticate("jwt", { session: false }),
  updateCollection
);

collectionsRouter.delete(
  "/collections/:id",
  passport.authenticate("jwt", { session: false }),
  removeCollection
);

export { collectionsRouter };
