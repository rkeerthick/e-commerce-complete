import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const AddressForm = ({ token, next }: any) => {
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubDivision, setShippingSubDivision] = useState("");
  const [shippingOption, setShippingOption] = useState("");

  const navigate = useNavigate();

  const method = useForm();

  const {
    data: shippingCountries,
    isLoading: shippingCountriesLoading,
    isFetching: shippingCountriesFetching,
  } = useQuery({
    queryKey: ["Fetch Shipping Countries"],
    queryFn: () => commerce.services.localeListShippingCountries(token.id),
  });

  const {
    data: shippingSubDivisions,
    isLoading: shippingSubDivisionsLoading,
    isFetching: shippingSubDivisionsFetching,
  } = useQuery({
    queryKey: ["Fetch Shipping Subdivisions", shippingCountry],
    queryFn: () => commerce.services.localeListSubdivisions(shippingCountry),
    enabled: !!shippingCountry,
  });

  const {
    data: shippingOptions,
    isLoading: shippingOptionsLoading,
    isFetching: shippingOptionsFetching,
    refetch: refetchShippingOptions,
  } = useQuery({
    queryKey: ["Payment Option"],
    queryFn: () =>
      commerce.checkout.getShippingOptions(token.id, {
        country: shippingCountry,
        region: shippingSubDivision,
      }),
    enabled: !!shippingSubDivision,
  });

  useEffect(() => {
    if (shippingSubDivision) {
      refetchShippingOptions();
    }
  }, [shippingSubDivision, refetchShippingOptions]);

  const options = shippingOptions?.map((data: any) => ({
    id: data.id,
    label: `${data.description} - (${data.price.formatted_with_symbol})`,
  }));

  if (
    shippingCountriesLoading ||
    shippingCountriesFetching ||
    shippingOptionsLoading ||
    shippingOptionsFetching ||
    shippingSubDivisionsLoading ||
    shippingSubDivisionsFetching
  ) {
    return <>Loading..</>;
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...method}>
        <form
          onSubmit={method.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingOption,
              shippingSubDivision,
            })
          )}
        >
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
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                fullWidth
                value={shippingSubDivision}
                onChange={(e: any) => {
                  setShippingSubDivision(e.target.value);
                }}
                disabled={shippingSubDivisions === undefined ? true : false}
              >
                {shippingSubDivisions &&
                  Object.entries(shippingSubDivisions.subdivisions).map(
                    ([code, name]: any) => (
                      <MenuItem key={code} value={code}>
                        {name}
                      </MenuItem>
                    )
                  )}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Option</InputLabel>
              <Select
                fullWidth
                value={shippingOption}
                onChange={(e: any) => setShippingOption(e.target.value)}
                disabled={shippingOptions === undefined ? true : false}
              >
                {options &&
                  options?.map((option: any) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={() => navigate('/cart')}>Back to cart</Button>
            <Button type="submit" color="primary" variant="contained">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
