import { ReactNode } from "react";
import { Box, Container } from "@mui/material";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "85vh",
      }}
    >
      <Box sx={{ mt: 10 }}>{children}</Box>

      <img
        className="absolute inset-0 blur z-[-10] w-full h-full object-cover"
        src="https://e1.pxfuel.com/desktop-wallpaper/463/531/desktop-wallpaper-geometry-18638-1920x1200-px-dark-geometric.jpg"
        alt="bg"
      />
    </Container>
  );
};
