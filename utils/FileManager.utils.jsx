import storage from "local-storage-fallback";

export const getRandomInt = (range) => Math.floor(Math.random() * Math.floor(range));

export const getInitialTheme = () => {
  const savedTheme = storage.getItem("theme");
  return savedTheme === "true";
};
