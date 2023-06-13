import { DataTypes, Model } from "sequelize";
import { Collection as Coll } from "../types/collection";
import { Items } from "./items";
import { sequelize } from "../services";
import { User } from "../types";

class Collection extends Model<Coll> implements Coll {
  public id!: number;
  public title!: string;
  public description!: string;
  public imgSrc?: string;
  public userId!: number;

  public readonly user?: User;
  public readonly items?: Items[];
}

Collection.init(
  {
    description: { type: DataTypes.TEXT },
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    imgSrc: { type: DataTypes.STRING },
    title: { allowNull: false, type: DataTypes.STRING },
    userId: {
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: { key: "id", model: "users" },
      type: DataTypes.INTEGER,
    },
  },
  { modelName: "Collection", sequelize, tableName: "Collection" }
);

export { Collection };
