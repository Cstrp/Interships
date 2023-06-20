import { createTheme } from "@mui/material";
import { breakpoints } from "./breakpoints";

export const lightTheme = createTheme({
  ...breakpoints,
  palette: {
    mode: "light",
    primary: { main: "#FFFFFF", dark: "#FFFFFF" },
    secondary: { main: "#FFFFFF" },
    background: { default: "rgba(0,0,0,0.3)" },
    text: { primary: "#FFFFFF", secondary: "#FFFFFF" },
    error: { main: "#FFFFFF", dark: "#FFFFFF" },
    action: { active: "#FFFFFF", disabled: "#FFFFFF" },
    common: { black: "#FFFFFF", white: "#FFFFFF" },
  },
});
