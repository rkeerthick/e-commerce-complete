import { CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loading = ({ label }: any) => {
  return (
    <>
      {label && <Typography variant="h5">{label}</Typography>}
      <CircularProgress />
    </>
  );
};

export default Loading;
