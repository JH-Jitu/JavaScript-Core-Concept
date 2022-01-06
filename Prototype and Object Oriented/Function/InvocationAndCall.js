// Exact Invocation hocche kake diye ami function take call kori ta bujhai.. For example,

const person = {
  name: "Jitu",
  id: "20-....-3",
  activities: function () {
    console.log("playing");
  },
};

person.activities(); // person.playing() ta hocche invocation..

// JavaScript er shob function ei method... karon shob gula function ei 'window' namok invisible object er moddhe thake.. For example,

function something() {
  return "something happened";
}
console.log(window.something()); // ei jemon window theke something function take call kora jacche.. karon something() function tai 'window' namok invisible ekta object er moddhe chilo
// Ar tai prttokta function kei javascript e method bola jai

// Function Call() Method in JS
const student = {
  name: function (params1, params2) {
    console.log(`${this.firstName} ${this.lastName}`);
    console.log(params1 + " " + params2);
    console.log(arguments);
  },
};

student1 = {
  firstName: "Md. Jidanul Hakim",
  lastName: "Jitu",
};

student2 = {
  firstName: "Ikhtider Hossain",
  lastName: "Rafi",
};

student.name.call(student1); // Call Method use korar karone ekhon student object er name function e this er value ekhon ar student object thakbena.. ami argument akare jei object dbo this er value hobe sheta.. so ekhane argument akare jehetu student1 dewa hosise, tai this er value student1 hoi gese ar output=> Md. Jidanul Hakim Jitu dekhabe

student.name.call(student2, "Argument Passed 1", "Argument Passed 2"); // call er first argument hocche jei object k ami own korte chacchi (this korte) sheta, ar baki gulo hocche normal argument jegula parameter akare receive kora jabe

// Apply Method
student.name.apply(student1, [
  "Argument Passed 1",
  "Argument Passed 2",
  "Argument Passed 3",
  "Argument Passed 4",
  "Argument Passed 5",
]); // Apply and Call method about same.. Just apply e first argument e object newar por porer argument ta ekta array nei.. Array r value gula sequentially ekta ekta kore parameter diye receive kora jai
