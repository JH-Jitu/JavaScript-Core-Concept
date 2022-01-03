// Iterable mane jetate iterate kora jai => step by step jawa jai

// To run Loop in Object

const person = { firstName: "Md. Jidanul Hakim", lastName: "Jitu", age: 21 };

for (let i in person) {
  //   console.log(i);
  console.log(i, ": ", person[i]); //Value pete hole evable likhte hoi => person["fullName"]
}

//..........................
// To check execution speed
var start = Date.now();

// task starts
for (var i = 0; i < 100; i++); //task here
// task ends

var end = Date.now();
console.log(`Execution time: ${end - start} ms`);

// To run Loop easily in Array (don't use for-in in Array)
let name = "Jitu";
for (let i of name) {
  console.log(i);
}
