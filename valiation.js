function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Plz Number Input";
  }
  const total = num1 + num2;
  return total;
}

const result = add(10, 30);
console.log(result);
