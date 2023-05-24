import { Field, Form, Formik } from 'formik';
import { signUp, signUpSchema } from '../../../../data';
import { TextFormField } from '../../Common/TextFormField/TextFormField.tsx';
import { Box, Button } from '@mui/material';

export const SignUpForm = (): JSX.Element => {
  return (
    <Formik
      validationSchema={signUpSchema}
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await signUp(values);
      }}
    >
      {(f) => {
        const { isSubmitting, isValid } = f;
        return (
          <Form>
            <Box className={'flex flex-col gap-2'}>
              <Field name={'username'} component={TextFormField} placeholder={'Type your username....'} />
              <Field name={'email'} component={TextFormField} placeholder={'Type your email...'} />
              <Field name={'password'} component={TextFormField} placeholder={'Type you password...'} />
            </Box>
            <Button
              type={'submit'}
              variant={'contained'}
              sx={{ width: '40%', mt: 2 }}
              disabled={!isValid || isSubmitting}
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
