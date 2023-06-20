import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { authRouter } from "../routes";
import { RouterPaths, User } from "../types";
import { _passportJwt } from "../middlewares";
import passport from "passport";
import { collectionsRouter } from "../routes/collectionsRouter";
import { itemsRouter } from "../routes/itemsRouter";
import { commentsRouter } from "../routes/commentsRouter";
import morgan from "morgan";

const app: Express = express();

app.use(passport.initialize());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
_passportJwt(passport);

app.use(RouterPaths.DEFAULT, express.static("static"));
app.use(RouterPaths.DEFAULT, authRouter);
app.use(RouterPaths.DEFAULT, collectionsRouter);
app.use(RouterPaths.DEFAULT, itemsRouter);
app.use(RouterPaths.DEFAULT, commentsRouter);

app.get(
  "/check",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const user = req.user as User;
    res.json({
      message: `Authentication successful`,
      x: user,
    });
  }
);

export { app };
