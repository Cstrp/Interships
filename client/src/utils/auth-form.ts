import { User } from 'src/types/user';
import { Notify } from 'quasar';
import { api } from 'boot/axios';
import { ref } from 'vue';

const email = ref<string | null>(null);
const password = ref<string | null>(null);

const onSubmit = async (url: string) => {
  const user: User = {
    email: email.value ?? '',
    password: password.value ?? '',
  };

  try {
    await api.post<User>(url, user);
    Notify.create({
      type: 'positive',
      message: 'Successfully!',
      position: 'bottom',
      timeout: 2000,
    });
  } catch (error) {
    console.log(error);

    Notify.create({
      type: 'negative',
      message: `${error.response.data.error}: ${error.response.data.message}`,
      position: 'bottom',
      timeout: 2000,
    });
  }
};

const onReset = () => {
  email.value = null;
  password.value = null;

  Notify.create({
    type: 'info',
    message: 'Reset form data successfully!',
    position: 'bottom',
    timeout: 2000,
  });
};

export { email, password, onSubmit, onReset };
