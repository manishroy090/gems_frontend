
import * as yup from "yup"

export const Userschema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(8, "Min 8 characters"),
  role: yup.string().required("Role is required"),
  status: yup.string().required("Staus is required"),
}).required()