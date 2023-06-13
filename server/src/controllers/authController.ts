import { Request, Response } from "express";
import { checkBody, checkPassword, encrypt, errorHandler } from "../utils";
import { generateToken } from "../utils/generateToken";
import { User } from "../services";

const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const err = checkBody(req.body, ["email", "password"]);
    const foundedUser = await User.findOne({
      where: { email },
    });

    if (err) errorHandler(res, 400, "Bad Request");

    if (foundedUser) {
      const correctPassword = checkPassword(
        password,
        foundedUser.dataValues.password
      );

      if (correctPassword && foundedUser.dataValues.id) {
        res.status(200).json({
          token: `Bearer ${generateToken(foundedUser.dataValues.id, email)}`,
        });
      }
    }
  } catch (error) {
    errorHandler(res, 500, "Internal Server Error");
  }
};

const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;
    const err = checkBody(req.body, ["email", "password", "username"]);

    const foundedUser = await User.findOne({ where: { email } });
    const encryptedPassword = encrypt(password);

    if (err) errorHandler(res, 400, "Bad Request");
    if (foundedUser?.dataValues.email) {
      errorHandler(res, 409, "User already exists!");
      return;
    }

    await User.create({
      email,
      password: encryptedPassword,
      username,
    });

    res.status(201).json({ message: "New user has been created!" });
  } catch (error) {
    errorHandler(res, 500, "Internal Server Error");
  }
};

export { signIn, signUp };
