export const toMap = (items) =>
  items.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
