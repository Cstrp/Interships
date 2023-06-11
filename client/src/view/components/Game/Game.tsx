import { Background } from "../Background/Background.tsx";
import { Button, Layout, Tooltip } from "antd";
import { GameSelector, LoginForm } from "..";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { BulbFilled } from "@ant-design/icons";

const { Header, Content } = Layout;

export const Game = () => {
  const [bg, setBg] = useState<boolean>(false);

  const location = useLocation();

  const handleShowBg = () => {
    setBg(prevBg => !prevBg); // Toggle the value of bg
  };

  return (
    <>
      <Header style={{ backgroundColor: !bg ? "black" : "transparent" }}>
        <div className={"flex flex-row justify-between"}>
          <div className={"max-w-lg"}>
            <GameSelector />
          </div>
          <div>
            <Tooltip
              title="Change theme... Warn! May reduce overall performance. "
              showArrow
            >
              <Button
                shape="circle"
                style={{
                  color: "rgba(255,240,0,0.75)",
                  border: "1px solid white",
                }}
                icon={<BulbFilled />}
                onClick={handleShowBg}
              />
            </Tooltip>
          </div>
        </div>
      </Header>
      <div className="relative flex flex-col items-center justify-center ">
        {location.pathname === "/" && <LoginForm />}

        <Content className={"my-20"}>
          <Outlet />
        </Content>
      </div>
      {bg && (
        <div className={"absolute top-0 -z-10 h-screen w-full"}>
          <Background />
        </div>
      )}
    </>
  );
};
