export const setLocalStorage = (key: string, itemToSet: {}) => {
  localStorage.setItem(key, JSON.stringify(itemToSet));
};

export const getLocalStorage = (key: string): string | null => {
  const itemStored = localStorage.getItem(key);
  if (!itemStored) return null;
  return JSON.parse(itemStored);
};

export const deleteLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
