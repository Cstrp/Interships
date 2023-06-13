import express from "express";
import { signIn, signUp } from "../controllers/authController";
import { RouterPaths } from "../types/routerPaths";

const authRouter = express.Router();

authRouter.post(RouterPaths.REGISTER, signUp);
authRouter.post(RouterPaths.LOGIN, signIn);

export { authRouter };
