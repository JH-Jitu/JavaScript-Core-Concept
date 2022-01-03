// Prototype hocche Property of a function jeta kono ekta object ke point kore...
function myFunc() {
  return "Hello World";
}
console.dir(myFunc);

// er age ekta problem chilo (point-4 e) karon.. Person er baire amake alada ekta object 'personMethods' er help nite hocche..er upor depend thaka lagtese   => eta point 5 e dekhbo..
// So, amra chai only Person function e thakte..personMethods() theke amra ber hoe ashche chai

function Person(name, age, country) {
  const person = Object.create(Person.prototype);

  person.name = name;
  person.age = age;
  person.country = country;

  return person;
}

Person.prototype = {
  eat: function () {
    console.log("The person is eating");
  },
  sleep: function () {
    console.log("The person is sleeping");
  },
  play: function () {
    console.log("The person is playing");
  },
};
const sakib = Person("Sakib", 21, "Bangladesh");
const sunny = Person("Sunny", 22, "India");
console.log(sunny);
sunny.play(); //'sunny' object er prototype theke play() function er access pawa geche
