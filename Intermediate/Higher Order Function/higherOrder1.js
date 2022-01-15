// Proof that function is a special kind of Object

// In Object,
const anObject = {
  something: "Hello Something",
};
console.log(anObject);
anObject.world = "Hello World";
console.log(anObject);

function something() {
  console.log("Hello Something");
}
something();

something.world = "Hello World"; // Bad practice

console.dir(something); // Property er moddhe world name e ekta property set hoe geche

console.log(something instanceof Object); // True

// JS e function ke parameter e newa jai, function e object er moton property set kora jai, ek function theke onno function return kora jai
