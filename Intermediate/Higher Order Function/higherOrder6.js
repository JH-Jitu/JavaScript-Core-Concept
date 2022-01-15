// Make our own Filter method

const friends = [
  {
    name: "Sunny",
    salary: "100000",
  },
  {
    name: "Fardin",
    salary: "50500",
  },
  {
    name: "Sakib",
    salary: "80000",
  },
  {
    name: "Rafi",
    salary: "60000",
  },
];

// 80000 er upor er gula borolok

// The Function. arr => jei array niye kaaj korbo........ workFn => array ta niye ami jei kaaj
const myOwnFilter = (arr, workFn) => {
  const afterOperationArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    afterOperationArr.push(workFn(element));

    // To delete undefined
    // Just ekta nested loop e undefined paile shegula delete kore dewar kotha bole dte hobe
    for (let j = 0; j < afterOperationArr.length; j++) {
      if (afterOperationArr[j] == undefined) {
        afterOperationArr.pop(afterOperationArr[j]);
      }
    }
  }

  return afterOperationArr;
};

const amrBorolokFriends = myOwnFilter(friends, (friend) => {
  salary = parseFloat(friend.salary);
  if (friend.salary >= 80000) {
    return friend.name;
  }
});
console.log(amrBorolokFriends);

// ................

//  Built in Filter method
// const builtInFilter = friends.map((friend) => {
//   salary = parseFloat(friend.salary);
//   if (friend.salary >= 80000) {
//     return friend.name;
//   }
// });

// console.log(builtInFilter);
