const vowels = ["a", "e", "i", "o", "u"];

function countVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence.toLowerCase());
  letters.forEach((value) => {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}

console.log(countVowels("I love Bangladesh"));

const numbers = [5, 5, 5, 6, 7, 7, 9, 9, 2];

const duplicates = numbers.filter((value, index, array) => {
  return array.indexOf(value) !== index; // === dile unique value ber hoe ashbe
});
console.log(duplicates);
