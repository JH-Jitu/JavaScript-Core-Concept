const a = 5;

if (a === 5) {
  var b = 6; //let or, const use korle reference error dibe Scope er karone
}
console.log(b);

function myFunction() {
  name = "Jitu"; //var/let/const declare na korai she etake global variable dhore nibe => Accidental Global Variable
}
myFunction();
console.log(name);

let carName = "Toyota"; //let diye korle window te thakbena
console.log(window.carName);

function summation(a, b) {
  // a, b local Scope
  console.log(a + b);
}
summation(5, 6);
