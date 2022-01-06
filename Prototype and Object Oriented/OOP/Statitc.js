class Person {
  constructor(name) {
    this.name = name;
    this.admission = "Spring";
  }

  // 1
  activities() {
    console.log(`${this.name} is playing`);
    console.log(this.admission);
  }

  // 2
  static studies() {
    console.log(`${this.name} is studying`);
  }

  // 3
  static department(personObj) {
    console.log(`${personObj.name} department is CSE`); //this er jaigai ekhon personObj diye access korte hobe.. karon ekhane this nijer Class er vitorer property gulake own kore.... jar karone bairer obj ke this diye access kora jabena
  }
}

jitu = new Person("Md. Jidanul Hakim Jitu");

// 1
jitu.activities();

// 2
// jitu.studies();  // this will make a error.. Because, static method object diye access kora jaina..direct Class diye access korte hoi.. For example,
Person.studies(); //this.name e ekhon Person chole jabe

// 3
// Tobe access na kora geleo static method e argument akare class theke make kora object ta pass kore dewa jai.. tokhon oi object ta parameter akare static method receive korte pare
// For example,
Person.department(jitu);
// console.log(jitu);

//.........
//.........
class Student extends Person {
  constructor() {
    // super(activities);
    this.activities = activities(); //eta Person Class er activities hishbe add hoi jabe
  }
}

sakib = new Person("Sakib");

sakib.activities();
