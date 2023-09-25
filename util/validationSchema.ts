import * as Yup from "yup";

export const postValidationSchema = Yup.object({
  title: Yup.string()
    .required("This field is required")
    .min(5, "Must be 5 characters or more"),
  description: Yup.string()
    .required("This field is required")
    .min(5, "Must be 5 characters or more"),
  content: Yup.string()
    .required("This field is required")
    .min(5, "Must be 5 characters or more"),
});
