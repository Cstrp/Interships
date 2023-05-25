import { Field, Form, Formik } from 'formik';
import { getItem, ROUTER_PATHS, signIn, signInSchema, User } from '../../../../data';
import { TextFormField } from '../../Common';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const SignInForm = (): JSX.Element => {
  const initialValues: Pick<User, 'email' | 'password' | 'status'> = {
    email: '',
    password: '',
  };
  const navigate = useNavigate();

  return (
    <Formik
      validationSchema={signInSchema}
      initialValues={initialValues}
      onSubmit={(values, formikHelpers) => {
        signIn(values)
          .then((i) => {
            if (i) {
              const token = getItem('token');

              if (token) {
                navigate(ROUTER_PATHS.USERS);
              }
            }
          })
          .catch((err) => {
            if (err.message) navigate(ROUTER_PATHS.DEFAULT);
          });
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
