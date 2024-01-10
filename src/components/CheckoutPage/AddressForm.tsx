import React, { ChangeEvent, useEffect, useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

import TextFeild from "./TextFeild";
import { commerce } from "../../lib/commerce";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AddressFormPropType, CountryCodeType, OptionType, ShippingOption } from "./type";
import { ShippingDataType } from "./Checkout/type";

const AddressForm = ({ checkoutProducts, next }: AddressFormPropType) => {
  const [shippingCountry, setShippingCountry] = useState<string>("");
  const [shippingSubDivision, setShippingSubDivision] = useState<string>("");
  const [shippingOption, setShippingOption] = useState<string>("");

  const navigate = useNavigate();

  const method = useForm();

  const {
    data: shippingCountries,
    isLoading: shippingCountriesLoading,
    isFetching: shippingCountriesFetching,
  } = useQuery({
    queryKey: ["Fetch Shipping Countries"],
    queryFn: () =>
      commerce.services.localeListShippingCountries(checkoutProducts.id),
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
      commerce.checkout.getShippingOptions(checkoutProducts.id, {
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

  const options: OptionType[] = shippingOptions?.map(
    (data: ShippingOption) => ({
      id: data.id,
      label: `${data.description} - (${data.price.formatted_with_symbol})`,
    })
  );

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
            <TextFeild required={true} name="firstName" label="First Name" />
            <TextFeild required={true} name="lastName" label="Last Name" />
            <TextFeild required={true} name="address" label="Address" />
            <TextFeild required={true} name="email" label="Email" />
            <TextFeild required={true} name="city" label="City" />
            <TextFeild required={true} name="zip" label="Zip / Postal Code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                fullWidth
                value={shippingCountry}
                onChange={(e: SelectChangeEvent<string>) => {
                  setShippingCountry(e.target.value);
                }}
              >
                {shippingCountries &&
                  Object.entries<CountryCodeType>(
                    shippingCountries?.countries
                  ).map(([code, name]) => (
                    <MenuItem key={code} value={code}>
                      {typeof name === "string" && name}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                fullWidth
                value={shippingSubDivision}
                onChange={(e: SelectChangeEvent<string>) => {
                  setShippingSubDivision(e.target.value);
                }}
                disabled={shippingSubDivisions === undefined ? true : false}
              >
                {shippingSubDivisions &&
                  Object.entries<CountryCodeType>(
                    shippingSubDivisions.subdivisions
                  ).map(([code, name]) => (
                    <MenuItem key={code} value={code}>
                      {typeof name === "string" && name}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Option</InputLabel>
              <Select
                fullWidth
                value={shippingOption}
                onChange={(e: SelectChangeEvent<string>) =>
                  setShippingOption(e.target.value)
                }
                disabled={shippingOptions === undefined ? true : false}
              >
                {options &&
                  options?.map((option: OptionType) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={() => navigate("/cart")}>
              Back to cart
            </Button>
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
