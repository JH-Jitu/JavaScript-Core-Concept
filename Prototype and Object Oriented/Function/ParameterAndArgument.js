/*
 * Title: Parameter VS Arguments
 * Description: 
 * Parameters hocche function declaration er shomoi jei variable gula amra bracket e nei.. Parameter Value hishebe arguments er value gulake receive kore..
      function aFunc(parameter1, parameter2) {  
        // ......
      }
 * Arguments hocche function Call/Invoke korar shomoi jei value gula amra Pass kori..
      aFunc(argument1, argument2)
 */

function aFunc(x, y) {
  console.log(arguments); // Will show the all arguments (in an array) even if parameters jodi receive korar jonne na dewa thake
  console.log(x); // This will show the entire function
  console.log(x()); // This will show the return value of a function, As I am Calling/Invoking
  console.log(y.b());
}

function willPassByArg(params) {
  return "This will Pass by Arguments";
}
aObjectPass = {
  a: "something",
  b: function () {
    return "new Function pass by argument";
  },
};
aFunc(willPassByArg, aObjectPass, 10);

// ........
// Pass by Reference VS Pass By Value
function checkRefOrValue(obj, arr, primitiveValue) {
  obj["dept"] = "CSE";
  arr.push("Sunny");
  primitiveValue = 30;
}

// Object for passing
person = {
  firstName: "JH",
  lastName: "Jitu",
  dept: "EEE",
};
// Array for passing
friends = ["Rafi", "Sakib", "Fardin"];
//Primitive value for passing
aValue = 20;

checkRefOrValue(person, friends, aValue);

console.log(person); //will show the dept of person obj => CSE... because object is passed by reference in Argument
console.log(friends); //will show the 4 elements in friends array => will add Sunny... because Array is passed by reference in Argument
console.log(aValue); //Will show the output as before 20.. not 30... because Primitive Values are passed by value not by reference
