import express from "express";
import {
  createCollection,
  getCollections,
  removeCollection,
  updateCollection,
} from "../controllers/colletionsController";
import passport from "passport";

const collectionsRouter = express.Router();

collectionsRouter.get("/collections", getCollections);

collectionsRouter.post(
  "/collections/create",
  passport.authenticate("jwt", { session: false }),
  createCollection
);

collectionsRouter.put(
  "/collections/:id",
  passport.authenticate("jwt", { session: false }),
  updateCollection
);

collectionsRouter.delete(
  "/collections/:id",
  passport.authenticate("jwt", { session: false }),
  removeCollection
);

export { collectionsRouter };
