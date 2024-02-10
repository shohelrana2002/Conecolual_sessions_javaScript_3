// check if else odd and even numbers

function oddEvenCheck(x) {
  if (x % 2 === 0) {
    const result = "odd";
    return result;
  } else {
    const result = "Even";
    return result;
  }
}
const result = oddEvenCheck(501);
console.log(result);

// for loop

function names(name) {
  if (name !== "number") {
    console.log("Plz enter a number");
  }
  for (let i = 0; i <= name; i++) {
    console.log("shohel", i);
  }
}
names(5);
