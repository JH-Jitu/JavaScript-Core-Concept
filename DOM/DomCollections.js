// HTML Collections
const allPTag = document.getElementsByTagName("p");
console.dir(allPTag); // Will return HTML collections. eta ekta Object, not an array.. eta ekta array like object..

// allPTag.map((p) => console.log(p)); // jehetu array na tai map() plus other map er method gula ekhane kaaj korbena..

// Tobe setIterator thakai ekhane loop kaaj korbe.. like,
for (const iterator of allPTag) {
  console.log(iterator);
}
//....................
console.log("\n");
//....................
// While loop o kaaj korche
let i = 0;
while (i < allPTag.length) {
  console.log(allPTag[i]);
  i++;
}
