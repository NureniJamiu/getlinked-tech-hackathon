import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  phone: yup.number().required("Phone is a required field"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  topic: yup.string().required("This field is required"),
  category: yup.string().required("This field is required"),
  size: yup.string().required("This field is required"),
});

export const contactUsSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  message: yup.string().required("This field is required"),
});
