console.log("Hello World");

// JavaScript er foundation ei holo object. JS er Function itself is an Object
//Eta suppose child... Function itself is an Object
//Eta k mainly constructor function bole
//Javascript er shb function ei by default constructor function
//eta k constructor bolar karon holo ekhan theke object construct kora hoi..chailei ekta object create kora jai ei function theke
function Person(name) {
  let person = Object.create(Person.prototype);

  person.name = name;
  return person;
}
console.dir(Person);

// Suppose eta Parent...r eta upore Person function e inherit hocche...
Person.prototype = {
  eat() {
    console.log("Person is eating");
  },
  sleep() {
    console.log(`Person is sleeping`);
  },
};

const sakib = Person("Sakib");
sakib.sleep();
