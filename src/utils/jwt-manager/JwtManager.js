export const setJWTWithExpiry = (key, value, ms) => {
  const now = new Date();
  const item = { value: value, expiry: now.getTime() + ms };

  localStorage.setItem(key, JSON.stringify(item));
};

export const getJWTWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
