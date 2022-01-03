// For Array

const nums = [5, 4, 3, 2, 1];

console.dir(nums); //dir korle dekha jai etar prototype e Symbol.iterator() ekta function ache

const numsIterator = nums[Symbol.iterator]();

console.log("value: ", numsIterator.next());
console.log("value: ", numsIterator.next());
console.log("value: ", numsIterator.next());
console.log("value: ", numsIterator.next());
console.log("value: ", numsIterator.next());
// After completing all iteration this will return undefined
console.log("value: ", numsIterator.next());
console.log("value: ", numsIterator.next());

// The for-of is exactly doing the same steps as before.
console.log("\n.....Using For of......");
for (let n of nums) {
  console.log("value: ", n);
}

// Jetar moddhe Symbol.iterator() property ta ache shetai hocche iterator.

// ...........................
console.log("\n\n......For Object........");

//Iterator in Object:
const numsForObj = {};

numsForObj[Symbol.iterator] = function () {
  //eta return korbe ekta next() function

  let value = 0;
  let done = false;
  return {
    next() {
      //return korbe korbe done and value
      value += 10;
      if (value >= 100) {
        done = true;
        value = undefined;
      }
      return {
        value: value,
        done: done,
      };
    },
  };
};

const numsObjIterator = numsForObj[Symbol.iterator]();

console.log(numsObjIterator.next());
console.log(numsObjIterator.next());
console.log(numsObjIterator.next());
console.log(numsObjIterator.next());
console.log(numsObjIterator.next());
console.log(numsObjIterator.next());
console.log(numsObjIterator.next());
console.log(numsObjIterator.next());
console.log(numsObjIterator.next());
console.log(numsObjIterator.next());
console.log(numsObjIterator.next());

// After doing that I can use For-of in Object also (jehetu Symbol.iterator() ekhane niye eshechi)

console.log("\n.....Using For of......");
for (const iterator of numsForObj) {
  console.log("value: ", iterator);
}
