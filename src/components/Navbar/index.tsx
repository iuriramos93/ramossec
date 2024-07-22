import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider } from "@mui/material";
import theme from "../../css/theme";

import Logo from "../Logo";
import ClientArea from "../ClientArea";

import styles from "./styles.module.scss";

const ScrollTo = (pos: any) => {
  let element = document.getElementById(pos);

  element?.scrollIntoView({ behavior: "smooth", block: "start" });
  return;
};

const pages = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "Sobre",
    href: "about",
  },
  {
    name: "O que nos move",
    href: "move_us",
  },
  {
    name: "Valores",
    href: "values",
  },
  {
    name: "Serviços",
    href: "services",
  },
  // {
  //   name: "Portfolio",
  //   href: "portfolio",
  // },
  { name: "Time", href: "team" },

  // {
  //   name: "Contato",
  //   href: "contact_us",
  // },
];

// document.addEventListener("scroll", function(){
//   console.log(scrollY);
// } );

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{ boxShadow: 0,background:`#004aad`, }} position="sticky">
        <Container maxWidth="xl" sx={{ paddingTop: "15px" }}>
          <Toolbar disableGutters>
            <Logo />
            <Box
              justifyContent={"flex-end"}
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={() => ScrollTo(page.href)}>
                    <Typography
                      fontFamily={"Filson Pro,Roboto"}
                      textAlign="center"
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: "5px",
              }}
              justifyContent={"center"}
            >
              {pages.map((page, index) => (
                <Button
                  className={styles.ButtonMenu}
                  key={index}
                  onClick={() => ScrollTo(page.href)}
                  sx={{ my: 2, color: "#010A1C", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              justifyContent={"flex-end"}
            >
              {/* <ClientArea /> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
