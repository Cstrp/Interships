import { Tabs } from "antd";
import { selectOptions } from "./selectOptions.tsx";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../../../data";
import { useState } from "react";

export const GameSelector = () => {
  const [current, setCurrent] = useState<string>(RouterPaths.DEFAULT);
  const navigate = useNavigate();

  const onClick = (key: string) => {
    if (key) {
      setCurrent(key);
      navigate(key);
    }
  };

  return (
    <>
      <Tabs
        style={{ background: "transparent", color: "white" }}
        items={selectOptions}
        defaultActiveKey={current}
        onChange={onClick}
      />
    </>
  );
};
