export const localStorage = {
  get: (key: string) =>
    window.localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem("key") as string)
      : null,
  set: (key: string, value: unknown) =>
    window.localStorage.setItem(key, JSON.stringify(value)),
};
