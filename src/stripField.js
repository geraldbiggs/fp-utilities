export const stripField = (field) => (obj) => {
  let { [field]: foo, ...rest } = obj;
  return rest;
};
