import { DataTypes, Model } from "sequelize";
import { Tag } from "../types/tag";
import { Items } from "./items";
import { sequelize } from "../services";

class Tags extends Model<Tag> implements Tag {
  public id!: number;
  public name!: string;

  public readonly items!: Items[];
}

Tags.init(
  {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { allowNull: false, type: DataTypes.STRING },
  },
  { modelName: "tags", sequelize, tableName: "tags" }
);

export { Tags };
