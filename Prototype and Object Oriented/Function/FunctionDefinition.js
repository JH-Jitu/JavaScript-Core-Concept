//Expression
function something(params) {
  console.log("something");
} //no semicolon.. dileo error dbena but na dewa ta best practice

something(); //Statement => tai semicolon ache.. kitu expression ami function take invoke/call kora chara execute hobena..tai function er sheshe semicolon nei

const funcVar = function () {
  console.log("Function stored in a variable");
}; //anonymous function karon eta ekta variable e store kora hoeche //Ekhane Semicolon ache karon eta variable e thakar karone ekta executable statement er part hoe geche

funcVar(); // jokhon variable e rakha hoeche tokhon funcVar ta call/invoke kora hoi variable er name diye

// .............
// Built in Function Constructor    // No need to use

const funcConstructor = new Function("a", "b", "console.log(a+b)");

funcConstructor(5, 6);

// Hoisting is the default behavior of moving declarations to the top of the current scope
// That's why we can call a function before it's declared

checkingHoisting("Hello Hoisting");
function checkingHoisting(params) {
  console.log(params);
}

/*
 * Title: Statement akare dile ar hoisting hoina
 * Description: 
        usingVarHoisting();

        var usingVarHoisting = function () {
        console.log("Hoisting Using Statement");    //Will show a typeError
        };
 * Author: Jitu
 */

// IIFE => Immediately Invoked Function Expression
(function () {
  console.log("This is a IIFE function");
})(); // Semicolon dewar karone expression bola hoeche

// ........
// JavaScript function can be used in expressions.............//Can be used to store a value while calling
function expressFunc(a, b) {
  return a + b;
  //return undefined; if no return statement here
}
const getValueFromFunc = expressFunc(5, 10) * 5;
console.log(getValueFromFunc);

//..........
// Functions are object
// Function has both property and methods
function checkingObj(a, b) {
  console.log("length of Function: ", arguments.length);
}
console.log(checkingObj instanceof Object); //Will return true when Object or, Function

checkingObj(5, 6); // Jokhon call kori tokhon koita arguments ache ta receive kore niye nei

//...
//...
// Jokhon Object er property hishebe function define korbo, tokhon sheta ke bole Method to the Object..For Example,
const me = {
  name: "Jitu",
  activities: function () {
    //Ekhane Function=> method
    console.log("Playing");
  },
};

// Je function ta new Object create korar jonne design kora hoi, sheta k bole Object Constructor
function Person(name, id) {
  this.name = name;
  this.id = id;
}
const jitu = new Person("Jitu", "20-***-3");
console.log(jitu);
/*
 * Title: Uporer function constructor je shetar proof.. Uporer ta same evabe likha jai
        class Person {
            constructor(name, id) {
                this.name = name;
                this.id = id;
            }
        }
 */

// Arrow Functions
//In Traditional
function a(x, y) {
  return x + y;
}
console.log("In Traditional Function", a(2, 3));

// In Arrow //1 line er statement er return e return keyword tao dewa lagena
const b = (x, y) => x + y;
console.log("In Arrow Function", b(3, 4));

/*
 * Title: Arrow Functions
 * Description:
 * Arrow Function e kono This er value Global/Window bujhai..Oi function nijei this hishebe thakena...Means they don't have their own this
 * Arrow functions Hoisted na.. Tai define korar porei call korte hobe
 * Signle Statement line holei Curly-brackets{} and return keyword baad dewa jabe..
 * Const use kora better var/let theke
 *
 */
