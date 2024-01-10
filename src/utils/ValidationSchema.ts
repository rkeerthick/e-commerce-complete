import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  address: yup.string().required("Address is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  city: yup.string().required("City is required"),
  zip: yup.string().required("Zip / Postal Code is required"),
  shippingCountry: yup.string().required("Shipping Country is required"),
  shippingSubDivision: yup
    .string()
    .required("Shipping Subdivision is required"),
  shippingOption: yup.string().required("Shipping Option is required"),
});

export default validationSchema;
