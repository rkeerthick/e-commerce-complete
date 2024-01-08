import styled from "styled-components";
import { ThemeProps } from "../../types/CommonTypes";

export const MainStyle = styled("main")(({ theme }: ThemeProps) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexGrow: 1,
  backgroundColor: theme.palette.grey[100],
  marginTop: theme.spacing(8),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export const ToolbarStyle = styled("div")(({ theme }: ThemeProps) => ({
  ...theme.mixins.toolbar,
}));
