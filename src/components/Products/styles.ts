import { styled, } from "@mui/material/styles";

export const MainStyle = styled("main")(({theme}: any) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(10),
}));

export const ToolbarStyle = styled("div")(({theme}: any) => ({
  background: theme.mixins.toolbar
}))
