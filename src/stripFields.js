export const stripFields =
  (fields = []) =>
  (obj) => {
    return fields.reduce((acc, cur) => {
      let { [cur]: _, ...rest } = acc;
      return rest;
    }, obj);
  };
