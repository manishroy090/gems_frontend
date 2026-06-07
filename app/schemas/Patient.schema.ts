import * as yup from "yup";
export const Patientschema = yup.object({
      firstname: yup.string().required("FirstName is required"),
      lastname: yup.string().required("LastName is required"),
      phonenumber: yup.string().required("Phone number is required"),
      email: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
     primary_doctor:yup.string().required("Primary doctor is required"),
     dob:yup.string().required("Dob is required"),
     gender:yup.string().required("Gender is required"),
     blood_group:yup.string().required("Blood group is required"),
     status:yup.string().required("Status is required"),
     address_one:yup.string().required("Address one  is required "),
     address_two:yup.string().required("Address two is required"),
     country_id:yup.string().required("Country is required"),
     state:yup.string().required("State is required"),
     city:yup.string().required("City is required"),
     pinCode:yup.string().required("Pinecode is required")
    

})

