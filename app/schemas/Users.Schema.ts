
import * as yup from "yup"

export const Userschema = yup.object({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  role_id: yup.string().required("Role is required"),
  designation:yup.string().required("Designation is required"),
  phone_number:yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  dob: yup.string().required("Password is required").min(8, "Min 8 characters"),
  gender:yup.string().required("Gender is required"),
  bloodgroup:yup.string().required("BloodGroup is required"),
  country:yup.string().required("Country is required"),
  state:yup.string().required("State is required"),
  city:yup.string().required("City is required"),
  address_1:yup.string().required("Address one is required"),
  address_2:yup.string().required("Address two is required"),
  pinecode:yup.string().required("Pine code is required")

}).required() 