import { Message, SignUpValues } from '../types';
import { Dispatch, SetStateAction } from 'react';
import { api } from './api_interceptor';
import { FormikHelpers } from 'formik';

export const sign_up = async (
  values: SignUpValues,
  helpers?: FormikHelpers<SignUpValues>,
  setMessage?: Dispatch<SetStateAction<string>>,
) => {
  try {
    const res = await api.post<Message>('/sign_up', values);

    if (res) {
      setMessage!(res.data.message);
    }

    helpers!.setSubmitting(false);
    helpers!.resetForm();
  } catch (error: any) {
    setMessage!(error.response.data.message);
  }
};
