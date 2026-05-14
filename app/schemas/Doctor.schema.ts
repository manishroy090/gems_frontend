import * as yup from "yup";

export const Doctorschema = yup.object({
  firstname: yup.string().required("FirstName is required"),

  lastname: yup.string().required("LastName is required"),

  phonenumber: yup.string().required("Phone number is required"),

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

  bio: yup.string().required("Bio is required"),

  // ================= SESSION VALIDATION =================

  sessions: yup
    .array()
    .of(
      yup.object({
        day: yup.string().required("Day is required"),

        start: yup.string().required("Start time is required"),

        end: yup.string().required("End time is required"),

        patients: yup
          .number()
          .typeError("Patients must be a number")
          .required("Patients is required")
          .positive("Patients must be greater than 0"),
      })
    )
    .min(1, "At least one session is required"),

  // ================= EDUCATION VALIDATION =================

  educations: yup.array().of(
    yup.object({
      degree: yup.string().required("Degree is required"),

      university: yup.string().required("University is required"),

      from: yup.string().required("From date is required"),

      to: yup.string().required("To date is required"),
    })
  ),

  // ================= AWARD VALIDATION =================

  awards: yup.array().of(
    yup.object({
      name: yup.string().required("Award name is required"),

      from: yup.string().required("Award source is required"),
    })
  ),

  // ================= CERTIFICATION VALIDATION =================

  certifications: yup.array().of(
    yup.object({
      name: yup.string().required("Certification name is required"),

      from: yup.string().required("Certification source is required"),
    })
  ),
}).required();