import { useCallback, useEffect, useRef } from "react";
import { generateNoise } from "../utils";

export const useBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const resize = useCallback(() => {
    const { innerWidth, innerHeight } = window;
    const width = innerWidth >> 1;
    const height = innerHeight >> 1;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;

      generateNoise(context, width, height);
    }
  }, []);

  const drawBackground = useCallback(() => {
    const { innerWidth, innerHeight } = window;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      const pattern = context.createPattern(canvas, "repeat") as CanvasPattern;
      if (pattern) {
        context.fillStyle = pattern;
        context.fillRect(0, 0, innerWidth, innerHeight);
      }
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const animateBackground = () => {
      resize();
      drawBackground();
      animationFrameId = requestAnimationFrame(animateBackground);
    };

    animateBackground();

    window.addEventListener("resize", resize);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("resize", resize);
    };
  }, [resize, drawBackground]);

  return canvasRef;
};
