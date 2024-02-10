// type of function

// no parameter no return
//no parameter .but return parameter
//parameter but no return
//parameter return

// no parameter no return
function fu1() {
  console.log("no parameter no return");
}
fu1();
//no parameter .but return parameter
function fu2() {
  console.log("no parameter .but return parameter", 5);
  return 5;
}

fu2();

//parameter but no return
function fu3(num1, num2) {
  console.log(`parameter but no return ${num1 + num2}`);
}
fu3(55, 56);
//parameter return
function fu4(num1, num2) {
  const total = num1 + num2;
  return total;
}

const total = fu4(55, 78);
console.log(`parameter return ${total}`);
