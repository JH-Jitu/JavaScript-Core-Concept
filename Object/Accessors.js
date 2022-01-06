const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  hello: function () {
    return "Hello World!";
  },
  get fullName() {
    return this.firstName + " " + this.lastName; // will return the computed value of 2 property. Jeta fullName property ta access korar maddhome pawa jabe
  },
  set changeFirstName(name) {
    this.firstName = name; // kichu set korte hobe ekhane
    console.log(arguments); //Akbar value ta parameter hishebe esheche ekhane, jeta arguments k console korle dekha jai
  },
};

// Getter er kaaj
console.log(person.fullName); // fullName getter ta tokhon ei active hobe jokhon etake ami access korte jabo... er karone eta memory te traditional function theke behind the scene e valo kaaj kore.. ektu memory space kom khai bola jai arki.. Traditional way te function likhle ami person object theke function ta call na korle person jokhon console korbo dekhbo oi function ta active... mane function ta memory r ekta jaiga hold kore ache kintu getter mute hoe thake

// Setter er kaaj
person.changeFirstName = "Akbar"; // person.changeFirstName er value ta setter function (changeFirstName() er Argument hishebe set hobe)
console.log(person);

// Define object
const obj = { counter: 0 };

// Define setters
Object.defineProperty(obj, "sum", {
  get: function () {
    return (this.counter = 5 + 6);
  },
});
console.log(obj.sum);
