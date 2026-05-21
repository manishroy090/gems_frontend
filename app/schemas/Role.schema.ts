import * as yup from "yup";


export const RoleSchema = yup.object({
    title:yup.string().required("Title is required"),
    status:yup.string().required("Status is required"),
    description:yup.string().required("Description is required")
}).required()