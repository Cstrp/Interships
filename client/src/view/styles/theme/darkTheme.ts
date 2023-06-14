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
      primary: "#FFFFFF",
    },
    error: {
      main: "#E57373",
    },
  },
});
