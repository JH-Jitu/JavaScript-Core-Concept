const personMethods = {
  eat: function () {
    console.log("The person is eating");
  },
  sleep: function () {
    console.log("The person is sleeping");
  },
  //   **** Tao ekta problem thakbe sheta holo 'personMethods' e kono notun property add korte chaile sheta manually Person object er khetreo add kora lagtese... jeta complexity barai
  play: function () {
    console.log("The person is playing");
  },
};
function Person(name, age, country) {
  const person = {};

  person.name = name;
  person.age = age;
  person.country = country;

  // 2ObjectInFunction.js er ekhane likha function gula jehetu shared shob object er khetrei tai egula alada ekta object e newa hoeche...
  person.eat = personMethods.eat;
  person.sleep = personMethods.sleep;
  // ekhon ami joto object ei create korina keno amr shared code gula same thaktese.. bar bar create kora lagtesena.. memory r space bachtese
  //   **** Tao ekta problem thakbe sheta holo 'personMethods' e kono notun property add korte chaile sheta manually Person object er khetreo add/refere kora lagtese... jeta complexity barai.
  //   For Example, Playing method upore personMethods e likhar por abr ekhane 'refer' kora lagtese,,,
  person.playing = personMethods.play;
  return person;
}

const sakib = Person("Sakib", 21, "Bangladesh");
const sunny = Person("Sunny", 22, "India");
console.log(sunny);
