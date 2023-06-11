import { RouterPaths } from "../../../data";
import { TabsProps } from "antd";

export const selectOptions: TabsProps["items"] = [
  { key: RouterPaths.DEFAULT, label: "Home" },
  { key: RouterPaths.HIDE_AND_SEEK, label: "Hide and seek" },
  { key: RouterPaths.FETCH_IF_YOU_CAN, label: "Fetch if you can!" },
];
