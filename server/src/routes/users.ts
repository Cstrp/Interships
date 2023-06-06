import express from "express";
import { createUser, getUsers } from "../controllers";

const usersRouter = express.Router();

usersRouter.get("/getUsers", getUsers);
usersRouter.post("/create", createUser);

export { usersRouter };
