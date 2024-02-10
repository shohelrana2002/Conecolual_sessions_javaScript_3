const numbers = [50, 60, 70, 80, 90, "1002", 145, 458, 4, 48, 4, 54, 54, 85, 4];
function maxNumbers(find) {
  // check Array
  if (!Array.isArray(find)) {
    return "plz input a array";
  }
  let max = find[0];
  for (let i = 0; i < find.length; i++) {
    if (typeof find[i] !== "number") {
      return "plz input a all number in array";
    }
    if (find[i] > max) {
      max = find[i];
    }
  }
  return max;
}

const result = maxNumbers(numbers);
console.log(result);
