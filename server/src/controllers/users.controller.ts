import { Request, Response } from "express";
import User from "../models/user";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newUser = await User.create({ name });

    res.status(201).json({ message: `User created successfully`, newUser });
  } catch (error) {
    console.warn(error);
    res.status(500).send(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) res.status(404).json({ message: "User not found" });

    const foundedUser = await User.findOne({ name }).exec();
    res.status(200).json(foundedUser);
  } catch (error) {
    console.warn(error);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().exec();

    if (!users) res.status(404).json({ message: "Oops ..." });

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from database");
  }
};

export { createUser, getUser, getUsers };
