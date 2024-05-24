function sum(...num) {
  const total = num.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return total;
  // Start coding here !
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
