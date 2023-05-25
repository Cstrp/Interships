import { useEffect, useState } from 'react';

export const useMessages = (message: string) => {
  const [msg, setMsg] = useState<string>('');

  useEffect(() => {
    setMsg(msg);
  }, []);

  return { msg };
};
