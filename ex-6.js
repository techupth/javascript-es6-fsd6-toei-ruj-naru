let height = undefined;
let result = (height) => {
  console.log(height);
  return height ?? "Height is not defined";
};
console.log(height);

console.log(result()); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
