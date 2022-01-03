// String Cannot be changed, only replaced. => Immutable.

const text1 = "Hello String";
const text2 = "World!";

const text = text1.concat(" ", text2);
console.log(text);

// .trim() diye kete bairer space gula kete fele

console.log("Hello".charAt("0"));
console.log("World"[0]);

// Undefined is a data Type

// split(",") Array return korbe

// indexOf()
const str = "How are you? => How I am?";
console.log(str.indexOf("are")); // String er shuru theke
console.log(str.lastIndexOf("How")); // String er shesher dik theke
