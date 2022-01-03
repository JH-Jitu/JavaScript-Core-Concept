// By declaring Object in Function for dynamic

function Person(name, age, country) {
  const person = {};

  person.name = name;
  person.age = age;
  person.country = country;

  person.eat = function () {
    console.log("The person is eating");
  };
  person.sleep = function () {
    console.log("The person is sleeping");
  };
  return person;
}

const sakib = Person("Sakib", 21, "Bangladesh");
const sunny = Person("Sunny", 22, "India");
console.log(sunny);

// jokhon ekhane kom object thakbe shomossha nai.. kintu larger application er khetre jokhon onk object create korte hobe tokhon eta maintain kora tough hoi jabe.. performance e issue dekha dibe
