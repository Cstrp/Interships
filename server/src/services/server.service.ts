import express, { Express } from "express";
import { DataTypes, ModelDefined, Optional, Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "../config";
import bodyParser from "body-parser";
import cors from "cors";
import { authRouter } from "../routes";
import { Role, User as U } from "../types";
import { RouterPaths } from "../types/routerPaths";

const app: Express = express();
const sequelize: Sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: "mysql",
  host: DB_HOST,
});

type UserCreationAttributes = Optional<U, "id" | "role">;

const User: ModelDefined<U, UserCreationAttributes> = sequelize.define(
  "User",
  {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: { isEmail: true },
    },
    id: {
      autoIncrement: true,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: { max: 16, min: 3 },
    },
    role: { allowNull: false, defaultValue: Role.USER, type: DataTypes.STRING },
    username: { allowNull: false, type: DataTypes.STRING },
  },
  { tableName: "users", timestamps: true }
);

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(RouterPaths.DEFAULT, authRouter);

export { app, sequelize, User };
