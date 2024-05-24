let height = undefined;
let result;

function isUndefined(value) {
  if (value === undefined) {
    result = "Height is not defined";
  }
}

isUndefined(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
