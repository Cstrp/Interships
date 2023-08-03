import { Notify } from 'quasar';

interface Err {
  response: {
    data: {
      error: string | number;
      message: string;
      statusCode: number;
    };
  };
}

export const errorHandler = (error: unknown) => {
  const errorMessage =
    (error as Err).response?.data?.message || 'Unknown error';
  const errorCode = (error as Err).response?.data?.statusCode || 500;
  const err = (error as Err).response.data.error || 'Unknown error';

  Notify.create({
    type: 'negative',
    message: `${errorCode}: ${errorMessage}: ${err}`,
    position: 'bottom',
    timeout: 2000,
  });
};
