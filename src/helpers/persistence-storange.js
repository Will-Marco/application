export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log("Error savong data");
  }
};
