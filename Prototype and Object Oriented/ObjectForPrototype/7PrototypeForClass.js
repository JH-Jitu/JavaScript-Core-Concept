// Converting to OOP
class Person {
  constructor(name, age, country) {
    // const person = Object.create(Person.prototype);  //eta baad diye amra person object tike this hishebe dhorte pari..jehetu Person e this er value ow nijei..so amra this theke er ager moto 'person object' ta pete pari... Orthat 'Person' er shob property 'this' er moddhe ontorvukto... jekhane property hishebe 'prototype' o ache...

    this.name = name;
    this.age = age;
    this.country = country;
  }

  //   nicher method gula ager Person.prototype er part..
  eat() {
    console.log("The person is eating");
  }
  sleep() {
    console.log("The person is sleeping");
  }
  play() {
    console.log("The person is playing");
  }

  //   return person;
}
/**
Person.prototype = {
    prototype er property gula Class er vitor theke access korte hoi jokhon Function er jaigai class likha hoi
};
 */

const sakib = new Person("Sakib", 21, "Bangladesh");
/*
 * Title: new & this keyword
 * Person e this kore dewar shathe shathe ekhane 'new' keyword ante hobe.. jeta 'this' k point kore
 * classBased language (OOP based like Java, C#, c++ er oop te) evabe 'new' keyword diye Class theke Object make kora hoi.
 * JavaScript eo ES6 (ES2015) theke Class (OOP) support kore.. jetao in the backend prototype niyei kaaj kore..
 */
const sunny = new Person("Sunny", 22, "India");
console.log(sunny);
sunny.play(); //'sunny' object er prototype theke play() function er access pawa geche

let students = new Array();
console.dir(Array.prototype); // Vitorer jei method gula use kori.. shegula Prototype er maddhome inherit kore niye ashe
