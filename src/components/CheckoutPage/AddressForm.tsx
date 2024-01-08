import React, { useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

import TextFeild from "./TextFeild";
import { commerce } from "../../lib/commerce";
import { useQuery } from "@tanstack/react-query";

const AddressForm = ({ token }: any) => {
  // const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
  const [shippingSubDivision, setShippingSubDivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const method = useForm();

  const {
    data: shippingCountries,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["Fetch Shipping Countries"],
    queryFn: async () =>
      await commerce.services.localeListShippingCountries(token.id),
  });

  // console.log(shippingCountry, "shipping country");

  // shippingCountries && console.log(Object.entries(shippingCountries?.countries), "countries");

  if (isLoading || isFetching) {
    return <>Loading..</>;
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...method}>
        <form>
          <Grid container spacing={3}>
            <TextFeild requird={true} name="firstName" label="First Name" />
            <TextFeild requird={true} name="lastName" label="Last Name" />
            <TextFeild requird={true} name="address" label="Address" />
            <TextFeild requird={true} name="email" label="Email" />
            <TextFeild requird={true} name="city" label="City" />
            <TextFeild requird={true} name="zip" label="Zip / Postal Code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                fullWidth
                value={shippingCountry}
                onChange={(e: any) => {
                  setShippingCountry(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {shippingCountries &&
                  Object.entries(shippingCountries?.countries).map(
                    ([code, name]: any) => (
                      <MenuItem key={code} value={code}>
                        {name}
                      </MenuItem>
                    )
                  )}
              </Select>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select fullWidth value={} onChange={}>
                <MenuItem key={} value={}>
                  Select me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Option</InputLabel>
              <Select fullWidth value={} onChange={}>
                <MenuItem key={} value={}>
                  Select me
                </MenuItem>
              </Select>
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
