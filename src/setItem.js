export const setItem = (prop, fn) => (obj) => {
  return {
    ...obj,
    [prop]: fn(obj),
  };
};
