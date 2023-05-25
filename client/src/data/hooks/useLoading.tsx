import { useState } from 'react';

export const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const startedLoading = () => {
    setLoading(true);
  };

  const stoppedLoading = () => {
    setLoading(false);
  };

  return { loading, startedLoading, stoppedLoading };
};
