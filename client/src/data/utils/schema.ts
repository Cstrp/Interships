import * as yup from 'yup';

export const schema = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().email().required(),
  passwords: yup.string().required().min(3).max(16),
});
