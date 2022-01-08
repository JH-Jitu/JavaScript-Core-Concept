/*
 * Title: Type of Binding
    1. Implicit Binding Binding
    2. Explicit Binding
    3. New Binding
    4. Window Binding
 * 'this' keyword use hoi kono ekta function k different context e reuse korar jonne
 */

//................ Implicit Binding .........................

// FirstExample: Object er vitore this oi object ei..
var jitu = {
  name: "Jitu",
  age: 21,
  printName: function () {
    console.log(this.name); // ekhane 'this' holo full 'jitu object' tai
  },
};

jitu.printName(); //Called function er thik left e jei dot ta thakbe shetai holo this..mane okhan thekei this ta ashtese

//........................................
// Second Examples: Bairer object ke parameter e pass kore shetake this hishebe newa
var printNameFunction = function (obj) {
  obj.printName2 = function () {
    console.log(this.name); // Ekhane this holo 'obj' object ta.. karon obj.printName2 dewa.. ar obj e parameter akare receive kora hoeche hoeche kono ekta object, ar shei object tai holo ekhane this
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

// ...........................................
//Third Example: Function/Object e different places e condition wise this er value
var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName3: function () {
      console.log(this.name); // E jaigai this er value return object puratai.... r this jehetu return nijei own kore tai this.name return object e 'name property' er value jeta dewa hoeche sheta dekhabe... sheta jodi parameter theke hoi tobe parameter er value dekhabe
    },

    // one object example,
    fatherInform: {
      name: "Mr. Jitu",
      printName3: function () {
        console.log(`${this.name}`); // Ekhane this er value fatherInform object ta.. Karon ei function ta directly Person theke make kora object er modhe globally nei.. eta fatherObject namok arekta object er vitore.. Jar karone "Mr. Jitu" dekhabe this.name e
      },
    },

    // Object er moddhe parameter k object hishebe access kore, shei parameter er this niye example,
    dadarName: {
      name: "Dadar Name",
      printDadarNameFunc: function (dada) {
        console.log(this); // Ekhaneo this korle dekha jabe this er value hocche return na, borong return er vetor 'dadarName object' ta.. Tai this.name access korle dekha jabe 'name property' er value: "Dadar Name" dekhacche "Iftu"(return object e name er value) na dekhiye

        dada.printDadarName = function () {
          console.log(this.name); // Ekhane this er value parameter theke newa dada object ta.. karon dada.functionName dewa
        };

        // Extra (ignore it)
        const printInGlobalDadarNameFunc = function () {
          return {
            name: "uhaha",
            hudaiFunc: function () {
              console.log(this); // Ei jaigai this er value printInGlobalDadarNameFunc er return object ta..
            },
          };
        };
        printInGlobalDadarNameFunc().hudaiFunc(); //this er value immediate left er ta...
      },
    },
  };
};

var iftu = Person("Iftu", 22);
iftu.printName3(); //This hishebe ekhane 'iftu object' ta pass hocche.. karon dot(.) er immediate age printName3().. ar printName3() function ta this iftu object er moddhei..
iftu.fatherInform.printName3(); //This hishebe ekhane 'iftu object' ta pass hocche //Called function er thik immediate left e jei dot ta thakbe shetai holo this..mane okhan thekei this ta ashtese..Ei khetre fatherInform

const ifturDada = {
  name: "Mr. XXX",
};

iftu.dadarName.printDadarNameFunc(ifturDada);
ifturDada.printDadarName(); //Called function er thik left e jei dot ta thakbe shetai holo this..mane okhan thekei this ta ashtese..Ei khetre ifturDada variable e dhuke gese eta

//
// Extra (ignore it)
iftu.dadarName.printDadarNameFunc(ifturDada);

//.....................................................

//......................................................... Explicit Binding ...........................................................

// Example-1
const something = function () {
  console.log(this.firstName + " " + this.lastName);
};

const me = {
  firstName: "Md. Jidanul Hakim",
  lastName: "Jitu",
};

something.call(me); // Call Method use korar karone ekhon something object er name function e this er value ekhon ar something object thakbena.. ami argument akare jei object dbo this er value hobe sheta.. so ekhane argument akare jehetu student1 dewa hosise, tai this er value student1 hoi gese ar output=> Md. Jidanul Hakim Jitu dekhabe.. Mane ami explicitly bole dcchi this er value hobe 'me object' ta

//
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

player.call(sakib, props1, props2, props3); // call er first argument hocche jei object k ami own korte chacchi (this korte) sheta, ar baki gulo hocche normal argument jegula parameter akare receive kora jabe.. shegula sequentially parameter akare player object ta receive korte parbe

// Apply o same.. tobe baki parameter gula array akare pass hobe..
player.apply(sunny, sunnyVar); // Apply and Call method about same.. Just apply e first argument e object newar por porer argument ta ekta array nei.. Array r value gula sequentially ekta ekta kore parameter diye receive kora jai

//Binding Method
const bindingFunction = player.bind(akbar, props1, props2, props3); // eta ekta function/funtion er instance return kore..jaar karone eta k ekta variable e niye then oi variable (function) take call korte hoi.. mane ekta vairable e store/instance hoi
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
