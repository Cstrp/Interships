import { Request, Response } from "express";
import User from "../models/user";

const createUser = async (req: Request, res: Response) => {
  try {
    const { userName } = req.body;

    if (!userName) {
      return res.status(400).json({ error: "Username is required" });
    }

    const newUser = await User.create({ userName });

    res
      .status(201)
      .json({ message: "New user created successfully!", newUser });
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({}).exec();

    if (!users) {
      return res.status(404).json({ error: "No users found" });
    }

    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

export { createUser, getUsers };
