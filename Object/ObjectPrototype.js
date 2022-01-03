// prototype hocche ekta single jaiga jekhan theke amra property gula inherit kore niye ashi
let a = new String("Hello World");
console.dir(a);

// JavaScript er base e String er moddhe Prototype namok ekta chain ache..jekhane method gula ache... shekhan theke object  shei related Prototype er properties gula inherit kore niye ane....

// Delete keyword inherited properties gulake delete korte parena.. tobe eta prototype theke asha shob gula inherited object gular upor effect felbe..jar karone program crash korte pare. (delete 'object.prototype.toLocalString()' erkom)

// ......................Example.............

/* 
const person = {};

person.name = "Jitu";
person.age = 21;
person.country = "Bangladesh";

person.eat = function () {
  console.log("The person is eating");
};
person.sleep = function () {
  console.log("The person is sleeping");
};

*****Erokom onek gula make korar proyojon hole Object ar evabe kaaje ashena..tokhon blueprint er proyojon hoi.. r tai Person namok ekta blueprint Class/Constructor Function diye make kore nite hobe and shekhane property set kore dte hobe..er por shei blueprint er object make korar jonne 'new Function Name' korte hobe.. then ek ekta particular object er jonne parameter pass korte hobe.. tahole ekoi blueprint e jotogula iccha object make kore newa jabe simple code e...******* 

function Student() {.....} ...then,
const jitu = new Student("JH", "Jitu", 21, "20-***-3");
*/

// ...............Real Example................
function Student(first, last, age, id) {
  // Constructor function likha Camel Convention hobe.. (first letter capital)
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.id = id;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const jitu = new Student("JH", "Jitu", 21, "20-***-3"); // jitu ekta object ekhon
const sakib = new Student("Shamsur", "Sakib", 22, "20-***-3");
const rafi = new Student("Rafi", "Hossain", 23, "20-***-3");

console.log(jitu.fullName());

Student.prototype.nationality = "Bangladeshi"; // Student namok constructor er prototype e ami 'nationality' set kore diyechi..directly blueprint e jacchena.. karon prototype theke shob object ***'inherit'*** korte korte pare..
// Student.nationality = "Bangladeshi";

jitu.nationality = "Bangladeshi";
console.log(Student);
console.log(sakib.nationality);
/* Student er bluePrint e nationality na thakai 'sakib' object e nationality pawa jabena..tokhon 'sakib object' ta dekhbe Student blueprint e jehetu nai tokhon she tar baba 'Prototype chain' er moddhe 'nationality'  ache kina.. shekhane na pele tar poroborti chain e khujbe.. shesh porjonto khuje she 'nationality' er value dekhabe prototype theke 

JavaScript er object e dot(.) diye kichu access korte gele she age tar property r moddhe khujbe..shekhane na pele tar prototype e khujbe.. shekhaneo na pele poroborti prototype gulate khujhbe.. evabe shesh porjnto khuje she value pabe.. ar na peleo sheta bole dbe
*/

// ***** Only modify own prototypes. Don't modify the prototypes of Standard JavaScript Objects.******
const fardin = new String("Fardin");
console.dir(fardin);
// To add prototype in built-in Objects. Don't do it
String.prototype.dontDoIt = function () {
  return `Don't do it. It's dangerous!`;
};
const name = "Sunny";
console.log(name.dontDoIt());
// console.log(String.prototype.dontDoIt());
