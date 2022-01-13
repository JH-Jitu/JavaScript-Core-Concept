// Closure => Closure hocche ekti function with some remembered values. Mane Closure kono ekti function e tar parent der value remember kore rakhe reference er maddhome...

// For example,
var num1 = 5;
var num2 = 10;

function sum1() {
  return num1 + num2;
}
console.dir(sum1); // Jodio ei khetre Scopes er moddhe Global Object thakbe just jehetu ekta ekta function

// .............

// let/const diye korle ar 'Global scopes' e na giye 'script scopes' e chole jabe... Etao ekta closure.. jeta function er moddhe tar parent er value gulake remember kore rakhtese For example,
const num3 = 15;
const num4 = 20;

function sum2() {
  return num3 + num4;
}
console.dir(sum2);

// .............
