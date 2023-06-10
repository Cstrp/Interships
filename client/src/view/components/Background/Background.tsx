import React from "react";
import { useBackground } from "../../../data";

export const Background: React.FC = () => {
  const canvasRef = useBackground();

  return <canvas ref={canvasRef} className={"trash"} />;
};
