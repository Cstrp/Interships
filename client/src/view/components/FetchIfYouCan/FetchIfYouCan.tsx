import { CanvaProps } from "../../../data";
import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

export const FetchIfYouCan = ({ width, height }: CanvaProps) => {
  const { current: socket } = useRef(io("http://localhost:3001"));

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx) {
      const drawBackground = () => {
        ctx.clearRect(0, 0, width, height);
      };

      drawBackground();
    }

    return () => {
      if (socket) socket.disconnect();
    };
  }, [height, socket, width]);

  return (
    <canvas
      ref={canvasRef}
      className={"rounded-md "}
      style={{ width, height }}
    />
  );
};
