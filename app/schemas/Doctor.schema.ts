import * as yup from "yup";
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", null];
const MAX_SIZE_MB = 5;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
export const Doctorschema = yup.object({
  image: yup
    .mixed()
    .nullable()
    .test("fileType", "Only JPEG, PNG, WebP, or GIF allowed", (value) => {
      if (!value) return true;

       if (value) return ACCEPTED_TYPES.includes(value.type);

    })
    .test("fileSize", `Image must be under ${MAX_SIZE_MB}MB`, (value) => {
      if (!value) return true;
       if (value) return value.size <= MAX_SIZE_BYTES;
    })
  ,
  firstname: yup.string().required("FirstName is required"),
  lastname: yup.string().required("LastName is required"),
  phonenumber: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  dob: yup.string().required("Date of birth is required"),
  year_of_experience: yup
    .string()
    .required("Year of experience is required"),
  department_id: yup.string().required("Department is required"),
  designation: yup.string().required("Designation is required"),
  medical_licese_number: yup
    .string()
    .required("Medical License is required"),
  language_spoken: yup
    .string()
    .required("Language Spoken is required"),
  blood_group: yup.string().required("Blood group is required"),
  gender: yup.string().required("Gender is required"),
  fee: yup.string().required("Fee is required"),
  status: yup.string().required("Status is required"),
  feature_on_website: yup.boolean().default(false),
  bio: yup.string().required("Bio is required"),
  country_id: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  address_2: yup.string(),
  pin_code: yup.string().required("PinCode is required"),
  sessions: yup
    .array()
    .of(
      yup.object({
        day: yup.string().required("Day is required"),
        start_time: yup.string().required("Start time is required"),
        end_time: yup.string().required("End time is required"),
        patients: yup
          .number()
          .typeError("Patients must be a number")
          .required("Patients is required")
          .positive("Patients must be greater than 0"),
      })
    )
    .min(1, "At least one session is required"),
  educations: yup.array().of(
    yup.object({
      degree: yup.string().required("Degree is required"),

      university: yup.string().required("University is required"),

      from: yup.string().required("From date is required"),

      to: yup.string().required("To date is required"),
    })
  ),
  awards: yup.array().of(
    yup.object({
      name: yup.string().required("Award name is required"),

      from: yup.string().required("Award date is required"),
    })
  ),
  certifications: yup.array().of(
    yup.object({
      name: yup.string().required("Certification name is required"),

      from: yup.string().required("Certification date is required"),
    })
  ),
}).required();