import { Field, Form, Formik } from 'formik';
import { ROUTER_PATHS, signIn, signInSchema, STATUS, User } from '../../../../data';
import { SnackBar, TextFormField } from '../../Common';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignInForm = () => {
  const initialValues: Pick<User, 'email' | 'password'> = {
    email: '',
    password: '',
  };

  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  return (
    <>
      <SnackBar message={message} />
      <Formik
        validationSchema={signInSchema}
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          signIn(values).then((i) => {
            if (i) {
              setMessage(i.message);

              if (i.status === STATUS.ACTIVE) {
                navigate(ROUTER_PATHS.USERS);
              }
            }
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
    </>
  );
};
