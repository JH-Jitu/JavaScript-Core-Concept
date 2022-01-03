// Amra chai PersonMethods e ja ache ta automatically jate Person Function e refer hoe jai
// etar jonne amra Object.create() use korbo

const personMethods = {
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

function Person(name, age, country) {
  const person = Object.create(personMethods); //const person = {};  => eta shorie Object.create() newa hoeche..jate kore personMethod er moto ekta object 'Person function' e create kore newa jai.. ar 'person' child object tar maddhome er parent 'personMethods' er property gula access kora jai...
  //***Person object er prototype er moddhe personMethods gula chole gese ekhon

  person.name = name;
  person.age = age;
  person.country = country;

  //   personMethods er function gula ekhon Person theke make kora jekono object er Prototype e khuje pawa jabe

  return person;
}

const sakib = Person("Sakib", 21, "Bangladesh");
const sunny = Person("Sunny", 22, "India");
console.log(sunny);
sunny.play(); //'sunny' object er prototype theke play() function er access pawa geche

// Ekhaneo ekta problem karon.. Person er baire amake alada ekta object 'personMethods' er help nite hocche..er upor depend thaka lagtese   => eta point 5 e dekhbo..
