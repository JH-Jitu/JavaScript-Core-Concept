// Object e 'const' use kora better karon eta value ke refer na kore reference k refer kore...
const car = {
  name: "Ferari",
  model: 400,
  weight: "1000kg",
  color: "White",
  start: function () {
    this.brake(); //ekhane Car Object er moddhe this er value ty hocche Car.. tai oi car tar kono ekta property access korte chaile this.something diye access korte hobe
    console.log("Car is Starting");
  },
  brake: function () {
    console.log("Car is stopped");
  },
};

// console.log(car.start); //Parentheses '()' na dile direct object er oi function tai console e show korbe..call na kore..
car.start();
console.log(car.model);
console.log(car["weight"]);

//Egulake Literal Syntax bole => name: "Ferari", model: 400, weight: "1000kg",

// We should use Literal Syntax
const x = 5;
console.log(x);
// We Should not use =>
const y = new Number(5);
console.log(y);

console.log("x = y: ", x === y); //=== dile false karon value same holeo type same na

//Jokhon primitive value gular bivinno methods and properties execute korte chai tokhon JavaScript primitive value gulake Object hishebe treat kore

const country = "Bangladesh";
console.log(country.length); // jokhon 'length' method take execute korsi tokhon eta object hoi gese.. erokom => new String... Tai bina karone 'new String' eta use kora uchit na.. karon jokhon ei eta use korte jai tokhon String ta object hishebe use hoi ar ekhane onk 'method' auto chole ashe amra use kora charai...tai eta muloto slow hoe jai
