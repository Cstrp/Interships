export const setItem = (key: string, value: unknown): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting item in local storage for key ${key}: ${error}`);
  }
};

export const getItem = (key: string) => {
  try {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return null;
  } catch (error) {
    console.error(`Error getting item from local storage for key ${key}: ${error}`);
    return null;
  }
};

export const removeItem = (key: string): void => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item from local storage for key ${key}: ${error}`);
  }
};

export const clear = (): void => {
  try {
    window.localStorage.clear();
  } catch (error) {
    console.error(`Error clearing local storage: ${error}`);
  }
};
