import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./view/styles/theme/darkTheme.ts";
import { SnackbarProvider } from "notistack";

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <SnackbarProvider
        autoHideDuration={3000}
        variant={"info"}
        className={
          "text-white bg-transparent backdrop-blur shadow shadow-white"
        }
      >
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  );
};
