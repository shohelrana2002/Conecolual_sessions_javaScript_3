function pandaCost(singra, samosha, jilapi) {
  if (
    typeof singra !== "number" ||
    typeof samosha !== "number" ||
    typeof jilapi !== "number"
  ) {
    return "plz add oll number";
  } else if (singra < 0 || samosha < 0 || jilapi < 0) {
    return "plz all a positive number";
  }
  const singraPrice = 7;
  const samoshaaPrice = 10;
  const jilapiPrice = 15;
  const total =
    singra * singraPrice + samosha * samoshaaPrice + jilapi * jilapiPrice;
  return total;
}
const total = pandaCost(1, 5, 1);
console.log(total);
