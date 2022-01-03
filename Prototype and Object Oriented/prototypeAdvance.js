function Person(name, age) {
  //Parent Class
  this.name = name;
  this.age = age;
}

function Programmer(name, age, expertise, experience) {
  //Sub Class
  Person.call(this);
  this.name = name;
  this.age = age;
  this.expertise = expertise;
  this.experience = experience;
}

Person.prototype = {
  programming() {
    console.log(
      `${this.name} is programming.\nHe is expert in ${this.expertise}`
    );
  },
};

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

const Jitu = new Programmer("Jitu", 21, "Javascript", 1);
Jitu.programming();
