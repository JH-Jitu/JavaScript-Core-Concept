/*
 * Title: Map Vs Object
 * Author: Jitu
 * Map er shathe relation hocche Object er...
 * Map e key-value pair thake... jekhane key ta any data type er hote pare
 * Object e key-value pair thakleo key ta String data type er ei hote hoi kintu Map er khetre both Key and Value any data type er hote pare
 * Object er khetre order maintain kora mandatory na.. kintu Map er khetre mandatory.
 * Object is not directly iterable but Map is directly iterable
 * Object er size nei but Map er ase
 */

// For Example, in Object
const person = {
  firstName: "JH",
  lastName: "Jitu",
  major: ["Data Science", "Machine Learning"],
  /*
   * Title: key in Object
   * Ekhane value any data type holeo key(firstName, lastName, Major) gula String data type er ei hote hocche
   */
};

// In Map
function me() {
  return "Jitu function";
}

const aMap = new Map();
aMap.set("Sakib", 300);
aMap.set("Rafi", 400);
aMap.set(me(), 200);
/*
 * Title: key in Map
 * Ekhane both key and value any data type er hote partese.... like 3 no tate key hishebe me() function set kora hocche
 */

console.dir(aMap);

for (const iterator of aMap) {
  //aMap.keys() korle key pawa jabe
  console.log(iterator);
}
aMap.forEach((value, key) => console.log(key));

function isArray(myArray) {
  //   hello = myArray.constructor().toString();
  console.log(myArray.constructor.toString().includes("Array"));
  //   console.log(hello.includes("Array"));
}

isArray([1, 2, 3]);

// Undefined => Memory te sheta ache, kintu taar value chinena/pacchena erokom
// null => Exist ei korena jeta
