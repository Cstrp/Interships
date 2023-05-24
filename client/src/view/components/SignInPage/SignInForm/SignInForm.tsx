import { Field, Form, Formik } from 'formik';
import { signIn, signInSchema, User } from '../../../../data';
import { TextFormField } from '../../Common/TextFormField/TextFormField.tsx';
import { Box, Button } from '@mui/material';

export const SignInForm = (): JSX.Element => {
  const initialValues: Pick<User, 'email' | 'password' | 'status'> = {
    email: '',
    password: '',
  };

  return (
    <Formik
      validationSchema={signInSchema}
      initialValues={initialValues}
      onSubmit={async (values, formikHelpers) => {
        await signIn(values);
        formikHelpers.setSubmitting(false);
      }}
    >
      {(f) => {
        const { isSubmitting, isValid } = f;
        return (
          <Form>
            <Box className={'flex flex-col gap-2'}>
              <Field name={'email'} placeholder={'Type your email address...'} component={TextFormField} />
              <Field name={'password'} placeholder={'Type your password...'} component={TextFormField} />
            </Box>
            <Button
              type={'submit'}
              variant={'contained'}
              disabled={!isValid || isSubmitting}
              sx={{ width: '40%', mt: 2 }}
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
