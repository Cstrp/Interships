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

const app: Express = express();

app.use(passport.initialize());
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

// app.post("/upload", async (req, res) => {
//   try {
//     const { image } = req.body;
//
//     if (!image) {
//       return res.status(400).json({ error: "Image data is required" });
//     }
//
//     const imageUrl = await uploadImage(image);
//     return res.status(200).json({ imageUrl });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Image upload failed" });
//   }
// });

export { app };
