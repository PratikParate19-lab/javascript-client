import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .min(3),
  sports: yup.string().required("Sport is a required field"),
  role: yup.string().required("Player is required field")
});
