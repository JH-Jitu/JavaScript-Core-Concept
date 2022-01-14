console.log(this);

function Person(name) {
  //   this.name = name;
  console.log(name);
}
// const jitu = new Person("Jitu");

Person("jitu");

console.dir(Person); // console.dir korle dekha jabe Scope er moddhe Global Object ta already ache.. Tai function execution context e Global Object make korar proyojon hoina

// JavaScript er prottekta function ei kichu na kichu return kore.. For example,
// 1.

function something1() {
  return "Jitu";
}
console.log(something1());

function something2() {
  console.log("jitu");
  //   return undefined // eta return kore rakhbe nij thekei => implicitly
}
console.log(something2()); // Jokhon console.log korbo dekha jabe function ta call howar por, shetar console dekhiye tar nijer console e undefined pawa jacche.. karon she return korar shomoi implicitly undefined return kore diyechilo

var a = 1;
function one() {
  console.log(a);
  function two() {
    console.log(b);
    var b = 2;
    function three(d) {
      let c = 3;
      console.log(c + d);
    }
    three(4);
  }
  two();
}

one();
