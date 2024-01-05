import { styled, } from "@mui/material/styles";

export const MainStyle = styled("main")(({ theme }: any) => ({
  width: "100%",
  boxSizing: "border-box",
  flexGrow: 1,
  backgroundColor: theme.palette.grey[100],
  // backgroundColor: theme.palette.background.default,
  marginTop: theme.spacing(8),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export const ToolbarStyle = styled("div")(({theme}: any) => ({
  background: theme.mixins.toolbar
}))
