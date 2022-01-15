// Understanding of Higher Order Function. Example-2 (without higher order function)

/* Question/Answer =>
 * 			 Question: Ekta array er element jader cgpa 3.90 er upor tader ber korte hobe  (without higher order function)
 * 			 Answer: 👇
 */

var numbers = [
  {
    name: "Rhyme",
    cgpa: 3.94,
  },
  {
    name: "Sakib",
    cgpa: 3.91,
  },
  {
    name: "Shohan",
    cgpa: 3.88,
  },
  {
    name: "Riyad",
    cgpa: 3.84,
  },
  {
    name: "Saif",
    cgpa: 3.8,
  },
];

var result1 = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i].cgpa >= 3.9) {
    result1.push(numbers[i]);
  }
}

console.log(result1);

// ...........................

// Understanding of Higher Order Function. Example-2 (with higher order function)

/* Question/Answer =>
 * 			 Question: Ekta array er element jader cgpa 3.90 er upor tader ber korte hobe   (with higher order function)
 * 			 Answer: 👇
 */

var result2 = numbers.filter((number) => number.cgpa >= 3.9);
console.log(result2);
