import { DataTypes, Model } from "sequelize";
import { Item } from "../types/item";
import { Collection } from "./collection";
import { CustomFields } from "../types/customFields";
import { sequelize } from "../services";

class Items extends Model<Item> implements Item {
  id!: number;
  tags!: string[];
  title!: string;

  public customFields?: CustomFields;
  public readonly collection?: Collection;
}

Items.init(
  {
    customFields: { type: DataTypes.JSONB },
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    tags: { allowNull: false, type: DataTypes.ARRAY(DataTypes.STRING) },
    title: { allowNull: false, type: DataTypes.STRING },
  },
  { modelName: "", sequelize, tableName: "" }
);

export { Items };
