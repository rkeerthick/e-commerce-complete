import styled from "styled-components";
import { ThemeProps } from "../../types/CommonTypes";
import { Button } from "@mui/material";

export const StyledToolbar = styled("div")(({ theme }: ThemeProps) => ({
  ...theme.mixins.toolbar,
}));

export const Title = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(5),
}));

export const EmptyButton = styled(Button)(({ theme }) => ({
  minWidth: "150px",
  [theme.breakpoints.down("xs")]: {
    marginBottom: "5px",
  },
  [theme.breakpoints.up("xs")]: {
    marginRight: "20px",
  },
}));

export const CheckoutButton = styled(Button)(({ theme }) => ({
  minWidth: "150px",
}));

export const Link = styled("a")({
  textDecoration: "none",
});

export const CardDetails = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(10),
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ButtonWrapper = styled("div")(() => ({
    display: "flex",
    gap: "10px",
}))