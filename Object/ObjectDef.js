// Primitive value => jetar kono properties or methods nei
// Primitive Data Type => jetar Primitive Value ache...
/*
JavaScript defines 5 types of primitive data types:
* string
* number
* boolean
* null
* undefined 
***Primitive values are immutable (they are hardcoded and therefore cannot be changed)***
****Primitive e amra ekta value dite pari..

But  ***Object & array te amra multiple data type er value dte pari***
*/

const student = {
  name: "Jitu", // property r order important na
  id: "20-**-3",
  semester: 4,
};
student.age = 21;
student.name = "Shohan"; // Object is mutable (changeable). => Ekhane Object er ekta property ke ami change korte partesi... Pura Object ta amar redeclare kora lagtesena... Ekta part change korechi just  => Objects are addressed by reference not by value
console.log(student);
console.log(student["id"]);
delete student.semester;
console.log("Student Object after Delete: ", student);
console.log("\nObject to Array representation: ", Object.values(student));
console.log("\nString Representation: ", JSON.stringify(student));
let studentName = "Jitu";
number = "Shohan"; // String is Immutable => Ekhane String er full value tai ami redeclare korte hocche... Property change korte parbona.. pura jinish tai change hoi gese

// New use kora chara Kono ekta Object/string etc Create korle sheta => Template Literal Method

console.log("\n............For IN.............");
const aiub = {
  fullName: "American International University-Bangladesh",
  noOfStudents: "19000",
  vcName: "Mrs. Lamagna",
};

for (let x in aiub) {
  console.log(x, ":", aiub[x]);
}

// For IN Loop in Object-Array-Object (Nested Array Object)
console.log("\n.......FOR-IN in Nested Object with Array..........");
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
for (let i in myObj.cars) {
  const carName = myObj.cars[i].name;
  console.log("Car Name: ", carName);
  const models = myObj.cars[i].models;
  for (let j in models) {
    console.log(models[j]);
  }
  console.log("....");
}

// Hash Table
/* 
table[0] --> 123
table[1]
table[2] --> 523
table[3] --> 111
table[4]
table[5]
table[6] --> 432 --> 43 --> 423
*/
