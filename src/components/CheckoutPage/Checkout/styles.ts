import styled from "styled-components";
import { Paper, Stepper } from "@mui/material";

export const Toolbar = styled.div(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

export const Layout = styled.div(({ theme }) => ({
  marginTop: "5%",
  width: "auto",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    width: "600px",
    marginInline: "auto",
  },
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  [theme.breakpoints.down("xs")]: {
    width: "100%",
    marginTop: 60,
  },
  [theme.breakpoints.up("sm")]: {
    width: "76%",
    marginInline: "auto",
    marginTop: 60,
  },
  [theme.breakpoints.up("md")]: {
    width: "70%",
    marginInline: "auto",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },
}));

export const StepperStyled = styled(Stepper)(({ theme }) => ({
  padding: theme.spacing(3, 0, 5),
}));

export const Spinner = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const DividerStyled = styled.div({
  borderBottom: "1px solid black",
  margin: "20px 0px"
});