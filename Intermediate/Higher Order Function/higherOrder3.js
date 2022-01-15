// Understanding of Higher Order Function. Example-1 (without higher order function)

/* Question/Answer =>
 * 			 Question: Ekta array er element gula 2gun korte hobe (without higher order function)
 * 			 Answer: 👇
 */

var numbers = [5, 4, 3, 2, 1];

var result1 = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  result1.push(element * 2); // element ke 2 diye gun kore push korchi
  console.log(element);
}

console.log(result1);

// ...........................

// Understanding of Higher Order Function. Example-2 (with higher order function)

/* Question/Answer =>
 * 			 Question: Ekta array er element gula 2gun korte hobe (with higher order function)
 * 			 Answer: 👇
 */

var result2 = numbers.map((number) => {
  console.log(number);
  return number * 2;
});

console.log(result2); // Map, forEach, filter egula new array return kore
