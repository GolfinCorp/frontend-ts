export const setLocalStorage = (key: string, itemToSet: {}) => {
  localStorage.setItem(key, JSON.stringify(itemToSet));
};

export const getLocalStorage = (key: string): {} => {
  const itemStored = localStorage.getItem(key);
  return itemStored ? JSON.parse(itemStored) : false;
};

export const deleteLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
