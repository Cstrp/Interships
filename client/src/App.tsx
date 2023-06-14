import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./view/styles/theme/darkTheme.ts";

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
