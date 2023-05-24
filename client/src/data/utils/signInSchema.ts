import * as yup from 'yup';

const signInSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(1).max(16),
});

const signUpSchema = yup.object({
  username: yup.string().required().min(1).max(16),
  email: yup.string().email().required(),
  password: yup.string().required().min(1).max(16),
});

export { signInSchema, signUpSchema };
