import { createTheme } from "@mui/material";
import { breakpoints } from "./breakpoints";

export const lightTheme = createTheme({
  ...breakpoints,
  palette: {
    mode: "light",
    primary: {
      main: "#F9F9F9",
    },
    secondary: {
      main: "#DDF7FB",
    },
    background: {
      default: "#F7F7F7",
    },
    text: {
      primary: "#203839",
    },
    error: {
      main: "#D21010",
    },
  },
});
