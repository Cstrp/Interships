import {
  AppBar,
  Box,
  Button,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Collections,
  DarkMode,
  LightMode,
  Login,
  Search,
} from "@mui/icons-material";
import { ROUTER_PATHS, themeStore } from "../../../../data";
import { observer } from "mobx-react";

export const Header = observer(() => {
  const theme = themeStore.theme;

  const handleChangeTheme = () => {
    themeStore.changeTheme();
  };

  return (
    <>
      <AppBar position="static" color={"transparent"} elevation={20}>
        <Toolbar className={"w-full flex flex-row justify-between"}>
          <Box className={"flex flex-row items-center"}>
            <IconButton
              size="large"
              edge="start"
              sx={{ mr: 2 }}
              component={Link}
              to={ROUTER_PATHS.DEFAULT}
            >
              <Collections />
            </IconButton>
            <Typography variant="h6" component="div">
              Collectify
            </Typography>
          </Box>

          <TextField
            variant={"standard"}
            placeholder={"Search..."}
            className={"w-1/2"}
            InputProps={{ startAdornment: <Search className={"mr-3"} /> }}
          />

          <IconButton onClick={handleChangeTheme}>
            {theme === "dark" ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Button
            component={Link}
            to={ROUTER_PATHS.SIGN_IN}
            color="inherit"
            endIcon={<Login />}
          >
            Log in
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
});
