function addNumbers(environmentConsoleFn = console.log, x = 0, y = 0, z = 0) {
  const total = x + y + z;
  environmentConsoleFn(total);
  return total;
}

function output(environmentConsoleFn, string) {
  environmentConsoleFn(string);
}

let total = addNumbers(console.log, 4);

console.log("outside total");
console.log((total = 4));
