import express from "express";
import { createUser, getUser, getUsers } from "../controllers";

const userRouter = express.Router();

userRouter.post("/create", createUser);
userRouter.get("/getOne", getUser);
userRouter.get("/getAll", getUsers);

export { userRouter };
