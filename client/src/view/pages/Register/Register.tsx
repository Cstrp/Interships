import { RegisterForm } from "../../components";
import { Box } from "@mui/material";

export const Register = () => {
  return (
    <>
      <Box className="flex justify-center items-center min-h-screen w-full ">
        <div className="relative w-[700px] h-[600px] shadow shadow-white bg-transparent border-2 border-white/50 rounded-lg backdrop-blur-md flex justify-center items-center">
          <RegisterForm />
        </div>
      </Box>
    </>
  );
};
