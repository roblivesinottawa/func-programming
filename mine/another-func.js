let collection = [1, 2, 3, 4, 5];

// function inc() {
//   return x + 1;
// }

// function isString(value) {
//   return typeof value == "string";
// }

let result = collection.reduce(
  function sum(acc, curr) {
    let res = acc[0] + curr;
    return [...acc, res];
  },
  [0]
);

console.log(result);
