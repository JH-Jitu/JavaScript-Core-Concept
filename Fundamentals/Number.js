const aNum = 32;
const decimal = aNum.toString(10);
const hexaDecimal = aNum.toString(16);
const octal = aNum.toString(8);
const binary = aNum.toString(2);

const convertToString = aNum.toString();

console.log(typeof convertToString);

console.log(aNum.toFixed(2));

const binaryToDecimal = (0b110000).toString(10);
console.log(binaryToDecimal);

let a = 5;
let b = 6;

console.log(a & b); //Returns 4
// 1 0 1
// 1 1 0
// 1 0 0 <= Ans = 4

// BitWise (Left Shift)
// 5 << 1 => 5 er binary 0 1 0 1 => left shift = 1 0 1 0  => (ek ghor left e shore jabe ar faka ta 0 diye diye fill up hoi jabe)

console.log(5 << 1);

// Right Shift
// 5 >>> 1 => 5 er binary 0 1 0 1 => right shift = 0 0 1 0  => (ek ghor right e shore jabe ar faka ta 0 diye diye fill up hoi jabe)

console.log(5 >>> 1);
