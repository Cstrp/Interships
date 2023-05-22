import { FieldProps, getIn } from 'formik';
import { TextField } from '@mui/material';

export const TextFormField = ({ field, form, ...props }: FieldProps): JSX.Element => {
  const getErrorMessage = getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return <TextField fullWidth helperText={getErrorMessage} error={!!getErrorMessage} {...field} {...props} />;
};
