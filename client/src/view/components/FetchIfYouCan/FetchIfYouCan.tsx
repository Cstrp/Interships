import { useEffect, useRef, useState } from "react";

interface GameBoardProps {
  width: number;
  height: number;
}

export const FetchIfYouCan = ({ width, height }: GameBoardProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [boardSize, setBoardSize] = useState({ width: 10, height: 10 });
  const tileSize = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      const resizeCanvas = () => {
        const { width, height } = canvas.getBoundingClientRect();
        const newBoardWidth = Math.floor(width / tileSize);
        const newBoardHeight = Math.floor(height / tileSize);

        setBoardSize({ width: newBoardWidth, height: newBoardHeight });
        canvas.width = newBoardWidth * tileSize;
        canvas.height = newBoardHeight * tileSize;

        drawGameBoard();
      };

      const drawGameBoard = () => {
        if (canvas && context) {
          context.clearRect(0, 0, canvas.width, canvas.height);

          for (let y = 0; y < boardSize.height; y++) {
            for (let x = 0; x < boardSize.width; x++) {
              context.fillStyle = "#ccc";
              context.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
              context.strokeStyle = "#fff";
              context.strokeRect(
                x * tileSize,
                y * tileSize,
                tileSize,
                tileSize
              );
            }
          }

          context.fillStyle = "black";
        }
      };

      resizeCanvas();
      drawGameBoard();

      window.addEventListener("resize", resizeCanvas);

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }
  }, [boardSize.height, boardSize.width]);

  return (
    <canvas
      ref={canvasRef}
      className={"rounded-md "}
      style={{ width, height }}
    />
  );
};
