
import * as yup from "yup"

export const Registerschema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8, "Min 8 characters").required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  registration_number: yup.string().required("Registration number is required"),
  tax_id: yup.string().required("Tax id is required"),
  website: yup.string().required("Website is required").url("Must be a valid URL").optional(),
  emergency_contact: yup.string().required("Emergency contact is required"),
  established_date: yup.string().required("Established date is required"),
  total_beds: yup.string().required("Total bed is required"),
  address_line1: yup.string().required("Address line 1 is required"),
  address_line2: yup.string().optional(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country_id: yup.number().required("Please select a country"),
  postal_code: yup.string().required("Postal code is required"),
}).required()