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

/*
 * Title: Understanding Master Object in Prototype
 * Description: Nicher f function er variable tike console.dir korle output e dekha jabe f er moddhe Prototype thake, tar moddhe abar prototype thake.. ar shei prototype tar moddhe Object() ekta function thake, jetake 'Master Object' bole.. r jei pura chain ta.. shetake bole Prototype Chain
 * JavaScript er jei object gula create hoi shegula prototype er ei Master Object theke create hoi
 *
 *
 */

const f = function Something() {
  console.log("Understanding Prototype");
};

console.dir(f);

// Ei Master object r prototype chain er moddhe JavaScript er built-in function gulo thake.. ekhane amrao nijeder moto kore method/property use add korte parbo.. For example,
Object.prototype.jitu = function () {
  console.log("I came from Master Object! 😎");
};

const aObj = {};

aObj.jitu();
