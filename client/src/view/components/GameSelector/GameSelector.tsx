import { Menu, MenuProps } from "antd";
import { selectOptions } from "./selectOptions.tsx";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../../../data";
import { useState } from "react";

export const GameSelector = () => {
  const [current, setCurrent] = useState<string>(RouterPaths.DEFAULT);
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = e => {
    if (e.key) {
      setCurrent(e.key);
      navigate(e.key);
    }
  };

  return (
    <>
      <Menu
        mode={"horizontal"}
        theme={"dark"}
        style={{ background: "transparent", color: "white" }}
        selectedKeys={[current]}
        items={selectOptions}
        onClick={onClick}
      />
    </>
  );
};
