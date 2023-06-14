import { Box, Typography } from "@mui/material";
import logo from "../../../assets/logo.png";

export const Welcome = () => {
  return (
    <Box sx={{ marginTop: 10 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Collectify!
      </Typography>
      <Typography variant="h4" align="center">
        Application to collect and manage your collections
      </Typography>
      <Box className={"flex mt-4 p-5 flex-row justify-center"}>
        <img src={logo} alt="Collectibles" className={"max-w-[555px] "} />
      </Box>
      <Box textAlign="center" marginTop={4}>
        <Typography variant="h5" className={"animate-bounce"}>
          Start collecting your collections right now!
        </Typography>
      </Box>
    </Box>
  );
};
