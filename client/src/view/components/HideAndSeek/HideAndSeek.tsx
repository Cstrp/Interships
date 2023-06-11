import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { CanvaProps } from "../../../data";

export const HideAndSeek = ({ width, height }: CanvaProps) => {
  const { current: socket } = useRef<Socket>(io("http://localhost:3001"));

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorXRef = useRef<number>(width / 2);
  const cursorYRef = useRef<number>(height / 2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx) {
      const handleMouseMove = (evt: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        cursorXRef.current = evt.clientX - rect.left;
        cursorYRef.current = evt.clientY - rect.top;
      };

      canvas.addEventListener("mousemove", handleMouseMove);

      return () => {
        if (socket) {
          socket.disconnect();
        }
      };
    }
  }, [width, height, socket]);

  // const handlePlayerJoin = () => {
  //   if (playerName) {
  //     socket.emit("player:join", playerName, GAMES.HIDE_AND_SEEK);
  //     setOpen(false);
  //     setPlayerName("");
  //   }
  // };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx) {
      const drawBackground = () => {
        ctx.clearRect(0, 0, width, height);

        // Draw background here

        // Draw flashlight effect
        const gradient = ctx.createRadialGradient(
          cursorXRef.current,
          cursorYRef.current,
          0,
          cursorXRef.current,
          cursorYRef.current,
          25
        );
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(0.8, "rgba(0,0,0,0.5)");
        gradient.addColorStop(1, "rgba(0,0,0,0.95)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        requestAnimationFrame(drawBackground);
      };

      drawBackground();
    }
  }, [height, width]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width, height, cursor: "none" }}
        width={width}
        height={height}
      />
    </>
  );
};
