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
import { Grow, Button, imageStyle } from "./styles";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const location = useLocation();

  const dummy = useSelector((state: any) => state);

  const cart = useSelector((state: any) => state.Store.cart);

  console.log(dummy, 'dummy')

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
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
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

          {location.pathname === "/" && (
            <Button onClick={() => navigate("/cart")}>
              <IconButton aria-label="Show cart item" color="inherit">
                <Badge
                  badgeContent={cart?.line_items?.length}
                  color="secondary"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
