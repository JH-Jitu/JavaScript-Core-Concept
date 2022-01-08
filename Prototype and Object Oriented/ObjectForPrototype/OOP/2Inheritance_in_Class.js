/*
 * Title: Inheritance and Polymorphism
 * Inheritance: Kono ekta class k parent hishebe bibechona kore shetar property/method access korar jonne (inherit korar jonne) arekta Child Class make kora hole, sheta Inheritance bole
 * Polymorphism: Inherited kono Class (Child) jodi Parent Class er property/method ke modify kore overwrite kore, tobe take polymorphism bole
 */

class Student {
  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }

  activities() {
    return `${this.name} is active in Computer Club`;
  }
}

const rafi = new Student("Rafi", "Marketing");

console.log(rafi);
console.log(rafi.activities());

class AccMembers extends Student {
  constructor(name, dept, recruited, sector) {
    super(name, dept);
    this.name = name;
    this.dept = dept;
    this.recruited = recruited;
    this.sector = sector;
  }

  roll() {
    return `${this.name} is general secretary`;
  }

  // Using Polymorphism => amra ekhane Student Class er activities() method take modify korbo jar karone AccMembers er object theke jodi activities k access kori tobe overwritten method er result tai dekhabe.. For example,
  activities() {
    console.log(super.activities()); // Jodi amra parent er tao use korte chai
    return `${this.name} is active in Computer Club and he joined in ${this.recruited}`;
  }
}

const jitu = new AccMembers("Jitu", "CSE", "Spring-21", "Development");

console.log(jitu.activities());
