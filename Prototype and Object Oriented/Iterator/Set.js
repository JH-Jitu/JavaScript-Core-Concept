const letters = new Set(["a", "b"]); // unique value set kora jai.. ar bakita array r motoi

console.dir(letters); //dir korle dekha jabe eta iterator

//So, etate for of use kora jabe..

for (const iterator of letters) {
  console.log(iterator);
}

/*
 * Title: key in Set
 * Set er kono key nei...
 * Object.entries() return value,value pair instead of key,value pair
 */

//For Example, In Object
const me = {
  firstName: "Md. Jidanul Hakim",
  lastName: "Jitu",
};
console.log(Object.entries(me));

/*
 * Title: Object e Object.entries(me)
 * 2ta array return korbe
 * First array er element e return korbe firstName and er value
 * Second array er element e return korbe lastName and er value
 */

// But in Set,
console.log(letters.entries());
/*
 * Title: Set e letters.entries()
 * 2ta array return korbe
 * First array and second array er 2ta element ei (key, value) return korbe value
 */

// In details..........
const entriesValue = letters.entries();

for (const iterator of entriesValue) {
  console.log(iterator);
}

console.log(letters instanceof Array);
console.log(letters instanceof Set);

// Array hocche value collection
// Set hocche unique value collection
