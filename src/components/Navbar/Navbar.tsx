import React from "react";
import { Toolbar, IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/commerce.png";
import { Grow, Button, imageStyle, AppbarStyled, LogoWrapper } from "./styles";
import { StateType } from "../../types/CommonTypes";
import Loading from "../Loading/Loading";
import Cart from '../SVG/Cart';

const Navbar = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const location = useLocation();

  const cart = useSelector((state: StateType) => state.Store.cart);

  console.log(cart, 'cart')

  return (
    <>
      <AppbarStyled theme={theme} position="fixed" color="inherit">
        <Toolbar>
          <LogoWrapper
            variant="h6"
            color="inherit"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="E-Commerce"
              height="25px"
              className={imageStyle}
            />
            E-Commerce
          </LogoWrapper>
          <Grow />

          {location.pathname === "/" && (
            <Button onClick={() => navigate("/cart")}>
              {(cart?.line_items?.length === 0) ? (
                <Loading image={<Cart width="auto" height="25px" />} />
              ) : (
                <IconButton aria-label="Show cart item" color="inherit">
                  <Badge
                    badgeContent={cart?.line_items?.length}
                    color="secondary"
                  >
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              )}
            </Button>
          )}
        </Toolbar>
      </AppbarStyled>
    </>
  );
};

export default Navbar;
