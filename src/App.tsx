import React from "react";
import { ThemeProvider, useTheme } from "@mui/material";
import { Navbar, Products } from "./components";

const App = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Products />
    </ThemeProvider>
  );
};

export default App;
