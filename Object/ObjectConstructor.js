//  JavaScript e shob function ei kind of Constructor Function

// Constructor bujhar jonne Function er name er first letter Capital likhte hoi.. => Camel Convention

function Student(first, last, age, id) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.id = id;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const jitu = new Student("JH", "Jitu", 21, "20-***-3"); // jitu ekta object ekhon
const sakib = new Student("Shamsur", "Sakib", 22, "20-***-3");
const rafi = new Student("Rafi", "Hossain", 23, "20-***-3");

console.log(jitu.fullName());

// Adding a property to an Object
jitu.nationality = "Bangladeshi"; // Direct Student e kono property add korte parbona.. karon eta hocche blueprint/template.. blueprint er ekta object create kore property add kore nite hobe
console.log(jitu);

// new String, new Array, new Object etc egula shob JavaScript er built-in Constructor
// Math is an Object. Not a built-in Constructor
