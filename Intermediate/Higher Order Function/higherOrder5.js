// Let's Make our own map Method

const friends = ["Sunny", "Rafi", "Sakib", "Fardin", "Faruk", "Akib", "Faisal"];
// const arekjonerfriends = ["bonny", "fira", "Bikas", "Fardin", "Faruk", "Akib", "Faisal"];

// const nameLengthArr = [];
// for (let i = 0; i < friends.length; i++) {
//   const element = friends[i];
//   console.log(element.length);
//   nameLengthArr.push(element.length);
// }
// console.log(nameLengthArr);

// The Function. arr => jei array niye kaaj korbo........ workFn => array ta niye ami jei kaaj
// const myOwnMap = (arr, workFn) => {
//   const afterOperationArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     afterOperationArr.push(workFn(element));
//   }

//   return afterOperationArr;
// };

// const nameLengthArr = myOwnMap(friends, (friend) => {
//   return {
//     name: friend.toUpperCase(),
//     nameLength: friend.length,
//   };
// });

// console.log(nameLengthArr);

const builtInMap = friends.map((friend) => {
  return {
    name: friend.toUpperCase(),
    nameLength: friend.length,
  };
});

console.log(builtInMap);
