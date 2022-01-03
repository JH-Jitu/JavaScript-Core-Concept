// Person e this kore dewar shathe shathe ekhane 'new' keyword ante hobe.. jeta 'this' k point kore

/*
...* Person function ta ekta Constructor function. Karon Person function tar maddhome jokhon 'sakib', 'jitu' namok new object construct kora hocche.. tai eti constructor function
...* JavaScript er shob function ei by-default Constructor function.
...* ConstrConstructor function likha Camel Convention hobe.. (first letter capital)
...*
 */
function Person(name, age, country) {
  // const person = Object.create(Person.prototype);  //eta baad diye amra person object tike this hishebe dhorte pari..jehetu Person e this er value ow nijei..so amra this theke er ager moto person object ta pete pari... Orthat 'Person' er shob property 'this' er moddhe ontorvukto... jekhane property hishebe 'prototype' o ache...

  this.name = name;
  this.age = age;
  this.country = country;

  //   return person;
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

// ****Ei kaaj gulo 'Class' er kaaj.. jeta Vanilla JS e chilona.. Vanilla JS evabe Prototype er maddhome 'Parent' er property gulake 'Child' e inherit kore niye kaaj korto *** => Inheritance

// Onnanno language e Inheritance hoi 'Class' er maddhome.. kintu JavaScript e inheritance hoi 'Prototype' er maddhome..
// tai JavaScript ke Prototype based language bola hoi
