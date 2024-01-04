import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import logo from "../../assets/commerce.png";
import {Grow, Button, imageStyle} from './styles'

const Navbar = () => {
  const theme = useTheme();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${0}px)`,
            marginLeft: 0,
          },
        }}
        color="inherit"
      >
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="E-Commerce"
              height="25px"
              className={imageStyle}
            />
            E-Commerce
          </Typography>
          <Grow />
          <Button>
            <IconButton aria-label="Show cart item" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
