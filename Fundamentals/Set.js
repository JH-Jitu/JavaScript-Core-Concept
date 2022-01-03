const aSet = new Set(["sakib", "Rafi", "Fardin"]);

aSet.add("Sunny");
console.log(aSet);
console.log(aSet.values()); //returns iterator function jetate amra for-of loop chalailte parbo

const aMap = new Map();
aMap.set("Sakib", 300);
aMap.set("Rafi", 400);
aMap.set("Sunny", 200);

console.log(aMap);

function isArray(myArray) {
  //   hello = myArray.constructor().toString();
  console.log(myArray.constructor.toString().includes("Array"));
  //   console.log(hello.includes("Array"));
}

isArray([1, 2, 3]);

// Undefined => Memory te sheta ache, kintu taar value chinena/pacchena erokom
// null => Exist ei korena jeta
