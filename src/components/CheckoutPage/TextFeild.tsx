import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

import { TextFeildPropType } from "./type";

const TextFeild = ({ name, label, required }: TextFeildPropType) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            defaultValue=""
            label={label}
            required={required}
          />
        )}
      />
    </Grid>
  );
};

export default TextFeild;
