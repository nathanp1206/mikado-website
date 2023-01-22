import { Field } from "formik";

import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

const FormField = (
  errors = {},
  touched = {},
  isSubmitting = false,
  name = "",
  label = "",
  type = "text",
  ...props
) => (
  <FormGroup className="my-3">
    <FormLabel className="fs-5">{label}:</FormLabel>
    <Field
      as={FormControl}
      disabled={isSubmitting}
      isValid={!errors[name] && touched[name]}
      isInvalid={errors[name] && touched[name]}
      name={name}
      type={type}
      {...props}
    />
    {errors[name] && touched[name] ? (
      <FormControl.Feedback type="invalid">{errors[name]}</FormControl.Feedback>
    ) : null}
  </FormGroup>
);

export default FormField;
