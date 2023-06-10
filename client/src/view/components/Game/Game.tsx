import { Background } from "../Background/Background.tsx";
import { Typography } from "antd";
import { GameSelector } from "..";
import { Outlet, useLocation } from "react-router-dom";

export const Game = () => {
  const location = useLocation();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Background />

      <div className="absolute left-1/3 right-1/2 inset-0 flex flex-col items-center justify-center">
        <GameSelector />

        <div className="max-w-screen-lg">
          <Typography className="text-4xl text-slate-300 font-bold py-2">
            {location.pathname === "/" ? "Select the game..." : ""}
          </Typography>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
