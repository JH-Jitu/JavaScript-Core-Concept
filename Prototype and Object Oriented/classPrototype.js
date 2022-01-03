class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log("Person is eating");
  }

  sleep() {
    console.log(`Person is sleeping`);
  }
}

const jitu = new Person("Jitu");
jitu.eat();
jitu.sleep();
