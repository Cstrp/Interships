import { createTheme } from "@mui/material";
import { breakpoints } from "./breakpoints";

export const darkTheme = createTheme({
  ...breakpoints,
  palette: {
    mode: "dark",
    primary: {
      main: "#212121",
      dark: "#00000033",
    },
    secondary: {
      main: "#FF4081",
      light: "#370031",
    },
    background: {
      default: "#1A1A1A",
    },
    text: {
      primary: "#F9F9F9",
      secondary: "rgba(255,255,255,0.05)",
    },
    error: {
      main: "#E57373",
    },
  },
});
