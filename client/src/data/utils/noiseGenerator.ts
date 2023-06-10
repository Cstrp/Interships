export const generateNoise = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  const imageData = context.createImageData(width, height);
  const data = imageData.data;
  const pixelCount = width * height;

  for (let i = 0, p = 0; i < pixelCount; ++i) {
    const c = Math.floor(Math.random() * 100);
    data[p++] = c;
    data[p++] = c;
    data[p++] = c;
    data[p++] = 225;
  }

  context.putImageData(imageData, 0, 0);
};
