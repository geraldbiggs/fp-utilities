export const setProperty = (prop, value) => (obj) => {
  return {
    ...obj,
    [prop]: value,
  };
};
