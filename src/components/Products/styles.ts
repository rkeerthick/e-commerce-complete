import styled from "styled-components";
import { ThemeProps } from "../../types/CommonTypes";

export const MainStyle = styled("main")(({ theme }: ThemeProps) => ({
  width: "100%",
  boxSizing: "border-box",
  flexGrow: 1,
  backgroundColor: theme.palette.grey[100],
  // backgroundColor: theme.palette.background.default,
  marginTop: theme.spacing(8),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export const ToolbarStyle = styled("div")(({ theme }: ThemeProps) => ({
  background: theme.mixins.toolbar,
}));
