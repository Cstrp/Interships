import { api } from './api_interceptor';
import { SignInData, SignInValues } from '../types';
import { FormikHelpers } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { setItem } from '../utils';
import { ROUTER_PATHS } from '../enums';

export const sign_in = async (
  value: SignInValues,
  navigate: NavigateFunction,
  helpers?: FormikHelpers<SignInValues>,
  setMessage?: Dispatch<SetStateAction<string>>,
) => {
  try {
    const res = await api.post<SignInData>('/sign_in', value);

    if (res) {
      setMessage!(res.data.message);
      setItem('data', res.data);

      if (res.data.message === 'Authorization successful.') {
        navigate(ROUTER_PATHS.USERS);
      }
    }

    helpers!.setSubmitting(false);
    helpers!.resetForm();
  } catch (error: any) {
    setMessage!(error.response.data.message);
  }
};
