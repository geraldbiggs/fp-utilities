// the goodies
// const callMethod =
//   (methodName, ...params) =>
//   (obj) =>
//     obj[methodName](...params);
// const awaitAll = (promiseArray) => Promise.all(promiseArray);
// const prop = (propName) => (obj) => obj[propName];
// const map = (func) => (arr) => arr.map(func);
// const pipe = (...functions) =>
//   functions.reduce((compound, func) => (input) => func(compound(input)));
// const download = (url) => fetch(url).then(callMethod("json"));

export const parallelize = async (
  taskArray,
  { successCb = (x) => x, errorCb = (x) => x } = {}
) => {
  try {
    let results = await Promise.all(taskArray);
    return successCb(results);
  } catch (e) {
    errorCb(e);
  }
};

// download("http://swapi.co/api/people/2/")
//   .then(pipe(prop("films"), map(download), awaitAll))
//   .then(console.log)
//   .catch(console.error);
