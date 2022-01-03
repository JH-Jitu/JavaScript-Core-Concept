// Type of Binding =>
// 1. Implicit Binding Binding
// 2. Explicit Binding
// 3. New Binding
// Window Binding

//................ Implicit Binding .........................

// FirstExample
var jitu = {
  name: "Jitu",
  age: 21,
  printName: function () {
    console.log(this.name);
  },
};

jitu.printName(); //Called function er thik left e jei dot ta thakbe shetai holo this..mane okhan thekei this ta ashtese

//.......................................................................................................................
// Second Examples:
var printNameFunction = function (obj) {
  obj.printName2 = function () {
    console.log(this.name);
  };
};
const rafi = {
  name: "Rafi",
  age: 21,
};

const fardin = {
  name: "Fardin",
  age: 21,
};

printNameFunction(rafi);
rafi.printName2();

//Third Example
var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName3: function () {
      console.log(this.name);
    },
    fatherInform: {
      name: "Mr. Jitu",
      printName3: function () {
        console.log(`${this.name}`);
      },
    },
    dadarName: {
      printDadarNameFunc: function (dada) {
        console.log(name);
        dada.printDadarName = function () {
          console.log(this.name);
        };
      },
    },
  };
};

var iftu = Person("Iftu", 22);
iftu.printName3();
iftu.fatherInform.printName3(); //Called function er thik left e jei dot ta thakbe shetai holo this..mane okhan thekei this ta ashtese..Ei khetre fatherInform

const ifturDada = {
  name: "Mr. XXX",
};

iftu.dadarName.printDadarNameFunc(ifturDada);
ifturDada.printDadarName(); //Called function er thik left e jei dot ta thakbe shetai holo this..mane okhan thekei this ta ashtese..Ei khetre ifturDada variable e dhuke gese eta

//.....................................................

//......................................................... Explicit ...........................................................

const player = function (props1, props2, props3) {
  // Parameter na nileo value ashe
  console.log(`${this.name} is a ${props1}, ${props2} and ${props3}`);
};
const sakib = {
  name: "Sakib",
  age: 21,
};

const props1 = "Player";
const props2 = "Married";
const props3 = "All Rounder";

const sunny = {
  name: "Sunny",
  age: 21,
};

const akbar = {
  name: "Akbar",
  age: 21,
};

const sun1 = "CA";
const sun2 = "Unmarried";
const sun3 = "Confident";

const sunnyVar = [sun1, sun2, sun3];

player.call(sakib, props1, props2, props3);
player.apply(sunny, sunnyVar);

const bindingFunction = player.bind(akbar, props1, props2, props3); // eta ekta function return kore..jaar karone eta k ekta variable e niye then oi variable (function) take call korte hoi
bindingFunction();

// .....................................................................

//................................. New Binding ......................................

function Student(name, id) {
  // this = Object.create(null);  // Ei jaigatai this ekta new object create kore..jei object create kore nicher this gula shei object takei point kore
  this.name = name; //ei this object k point kore //this tar name pass koreche jeta argument e diyechi
  this.id = id; // '' same
  console.log(`${this.name}'s id is ${this.id}`);
  // return this
}

Student.prototype = {
  department() {
    console.log(this.name + " is in CSE department");
  },
};

const student1 = new Student("student1", 1);
student1.department();

//..........................................................................

//............................... Window Binding ..................................
// ("use strict"); // eta use korle Window or Global show krbena this e
const winFunction = function () {
  console.log(this);
  console.log(this.name);
};

const member = {
  name: "Member 1",
};

// winFunction.bind(member);
winFunction(); //This er value window thakbe

//........................................................................................
// Practice arrow functions

const Teacher = (teacherName) => {
  this.teacherName = teacherName;
  console.log(this.teacherName);
};

// const juena = new Teacher("Juena");
const juena = Teacher("Juena"); //Arrow function dile 'new' keyword ta use kora jabena..
