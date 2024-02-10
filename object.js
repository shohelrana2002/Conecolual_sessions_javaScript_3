function info(details) {
  if (typeof details !== "object" || !details.age || !details.name) {
    return "Plz Enter a Correct Object";
  } else if (
    typeof details.name !== "string" ||
    typeof details.age !== "number"
  ) {
    return "Plz Enter a Correct Object";
  } else if (details.age <= 0) {
    return "Plz Input a Positive Number!";
  } else if (details.age > 100) {
    return "Don't Allow ";
  }
  const result = `My name is ${details.name}.My age is ${details.age}`;
  return result;
}

const result = info({ name: "shohel", age: 101 });
console.log(result);
