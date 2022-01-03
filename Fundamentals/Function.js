// Function Example Without Parameter:
function notifications1() {
  console.log("Fatima: Good Morning! (time: 9.05AM)");
}
notifications1();

// ..............
// Function Example With Parameter:
function notifications2(gfName, msg, time) {
  console.log(gfName + ": " + msg + " (time: " + time + ")");
  //   console.log(`${gfName}: ${msg} (time: ${time})`);
}
notifications2("Nowshin", "A very Good Morning!", "8.00AM");
notifications2("Zerin", "Hey, my world!", "8.30AM");
notifications2("Sadia", "Hi, Darling!", "8.40AM");

// ..............
// Without Return
function notifications3() {
  let greetings = "Good Afternoon!";
  let confusion = {
    career: "Ki hobe?",
    tkPoisha: "kamaite parboto?",
    poraLekha: "Result valo hobeto?",
  };
  //   return confusion;
  return greetings;
}
let myFunc = notifications3();
console.log(myFunc);

// ..............
// Scope Example
function notifications4() {
  let time = "Evening!";

  console.log(`Good ${time}`);
}
notifications4();
// console.log(time);
