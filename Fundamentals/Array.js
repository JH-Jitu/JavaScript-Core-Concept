const gfsArray = ["Sadia", "Fatima", "Nusrat"];
const gfsObject = new Array("Sadia", "Fatima", "Nusrat");
console.log(typeof gfsObject);

const differentTypesArray = [
  "Sakib",
  (sakib = { age: 20, id: "2002", semester: "Fall-21" }),
  30,
];

// Insert in Last
differentTypesArray.push(
  (friends = { bestFriend: "Rafi", closeFriends: ["Sunny", "Nubaddil"] })
);

// differentTypesArray[3] = friends = {
//   bestFriend: "Rafi",
//   closeFriends: ["Sunny", "Nubaddil"],
// };

length = differentTypesArray.length;
console.log(differentTypesArray[length - 1]);
console.log(differentTypesArray);

const closeFriends = ["Rafi", "Sakib", "Sunny", "Fardin"];

//closeFriends[8] = "Faisal"; //baki gula undefined array element thakbe jaar karone space khabe

for (let i = 0; i < closeFriends.length; i++) {
  console.log(closeFriends[i]);
}

//By using forEach()
// closeFriends.forEach((one) => console.log(one));

// It will become an Object after implementing the array like this
const student = [];
student["id"] = "2002";
student["name"] = "Shohan";
student["dept"] = "CSE";

const stdLength = student.length; //0 dekhabe
console.log(stdLength);

//Difference between array and object
const arrayExample = ["Python", "C++", "Go", "Ruby", "Dart"];
const objectExample = {
  dataScience: "Python",
  ProblemSolving: "C++",
  fasterBackend: "Go",
  webApplication: "Ruby",
};
console.log(arrayExample instanceof Array);

// LIFO
arrayExample.pop();
console.log(arrayExample);

// FIFO
arrayExample.shift();
console.log(arrayExample);

//Delete an Element => Should not use
delete arrayExample[0];
console.log(arrayExample);

//Concat

const array1 = ["a", "b", "c"];
const array2 = ["1", "2", "3"];
console.log(array1.concat(array2)); //returns new array, Same element thakle eta 2bar ei ashbe

//Sorting Number (ascending => a-b, descending => b-a) **** Boro array er jonne inefficient
const marks = [80, 90, 85, 78, 98, 92];
function sorting(a, b) {
  return a - b; //jokhon 80-90 = -10, tokhon she bujhe neije negative jehetu ashche a(80) hocche b(90) theke choto
}
const something = marks.sort(sorting);
// marks.sort((a, b) => a - b);
console.log(marks);

//Finding out the Max Number
console.log(Math.max.apply(null, marks));

//Random
const marks2 = [80, 90, 85, 78, 98, 92];
// marks2.sort((a, b) => 0.5 - Math.random());
// console.log(marks2);

for (let i = marks.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * i);
  const k = marks2[i];
  marks2[i] = marks2[j];
  marks2[j] = k;
}
console.log(marks2);

// Array Method
const someNums = [5, 10, 15, 20];

// forEach
function iterateFunc(value, index, array) {
  console.log(`${index}: ${value}
Array: ${array}
...............`);
}

someNums.forEach(iterateFunc);

// map
function iterateFuncForMap(value, index) {
  return `${index}: ${value * 2}`;
}
const mappedArray = someNums.map(iterateFuncForMap);
console.log("map(): ", mappedArray);

// filter
function iterateForFilter(value) {
  return value <= 10;
}
const filteredArray = someNums.filter(iterateForFilter);
console.log("filter(): ", filteredArray);

// reduce => ekta single value return kore
function iterateForReduce(total, value) {
  console.log(total);
  console.log("..........");
  return total + value;
}
const reducedArray = someNums.reduce(iterateForReduce);
// const reducedArray = someNums.reduce(iterateForReduce, 20);      //Initial Total=20 hobe
console.log(reducedArray);

console.log("indexOf 10 is: ", someNums.indexOf(10));

// find => return korbe condition wise first number ta
function iterateForFind(value) {
  return value > 5;
}

const foundArray = someNums.find(iterateForFind);
console.log("find(): ", foundArray);

// Array Constant
