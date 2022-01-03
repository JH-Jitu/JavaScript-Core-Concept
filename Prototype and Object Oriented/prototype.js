function Person(name) {
  // let this = Object.create(Person.prototype); //New keyword er karone ekhane person er jaigai this diye Object create hocche ar this return hocche

  this.name = name;

  // return this;
}
console.dir(Person);

Person.prototype = {
  eat() {
    console.log("Person is eating");
  },
  sleep() {
    console.log(`Person is sleeping`);
  },
};

const jitu = new Person("Jitu");
jitu.eat();
