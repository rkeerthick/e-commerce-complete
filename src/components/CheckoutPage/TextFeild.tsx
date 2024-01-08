import React from 'react'
import { TextField, Grid } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'

const TextFeild = ({name, label, required}: any) => {
    const {control} = useFormContext();
    return (
      <Grid item xs={12} sm={6}>
        {/* <Controller
          as={TextField}
          control={control}
          fullWidth
          name={name}
          label={label}
          required={required}
        /> */}

        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField {...field} fullWidth label={label} required={required} />
          )}
        />
      </Grid>
    );
}

export default TextFeild