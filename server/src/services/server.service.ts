import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { RouterPaths } from "../types";
import { _passportJwt } from "../middlewares";
import passport from "passport";
import morgan from "morgan";
import { upload } from "../middlewares/upload";
import { uploadImgResp } from "../controllers";
import {
  authRouter,
  collectionsRouter,
  commentsRouter,
  itemsRouter,
  tagsRouter,
} from "../routes";
import { searchRouter } from "../routes/searchRouter";

const app: Express = express();

app.use(passport.initialize());
app.use(morgan("tiny"));
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
_passportJwt(passport);

app.use(RouterPaths.DEFAULT, express.static("static"));
app.use(RouterPaths.DEFAULT, authRouter);
app.use(RouterPaths.DEFAULT, collectionsRouter);
app.use(RouterPaths.DEFAULT, itemsRouter);
app.use(RouterPaths.DEFAULT, commentsRouter);
app.use(RouterPaths.DEFAULT, tagsRouter);
app.use(RouterPaths.DEFAULT, searchRouter);
app.post(RouterPaths.UPLOAD, upload.single("image"), uploadImgResp);

export { app };
