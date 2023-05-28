export const setItem = (key: string, value: unknown): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  const value = window.localStorage.getItem(key);

  return JSON.parse(value || '{}');
};

export const clearStorage = () => {
  window.localStorage.clear();
};
