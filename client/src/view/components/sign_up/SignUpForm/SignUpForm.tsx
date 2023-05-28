import { Field, Form, Formik } from 'formik';
import { initialValues } from './initialValues';
import { Alert, Button, Snackbar } from '@mui/material';
import { TextFormField } from '../../common';
import { sign_up, signUpSchema } from '../../../../data';
import { useState } from 'react';

export const SignUpForm = () => {
  const [message, setMessage] = useState<string>('');

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => sign_up(values, formikHelpers, setMessage)}
        validationSchema={signUpSchema}
      >
        {(f) => (
          <Form className={' h-full flex flex-col justify-around'}>
            <Field name={'username'} component={TextFormField} placeholder={'Type your name...'} />
            <Field name={'email'} component={TextFormField} placeholder={'Type your email...'} />
            <Field name={'password'} component={TextFormField} placeholder={'Type your password...'} />
            <Button type={'submit'} variant={'contained'} disabled={!f.isValid || f.isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Snackbar open={!!message} autoHideDuration={3000}>
        <Alert variant={'filled'} severity={message === 'New user created successfully.' ? 'success' : 'error'}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
