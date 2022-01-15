export const ifPasses = (truthy) => (fn) => (item) =>
  truthy(item) ? fn(item) : item;
