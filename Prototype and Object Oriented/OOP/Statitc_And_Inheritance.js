class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.admission = "Spring";
  }

  // 1
  activities() {
    console.log(`${this.name} is playing`);
    console.log(this.admission);
    console.log(this.id);
  }

  // 2
  static studies() {
    console.log(`${this.name} is studying`);
  }

  // 3
  static department(personObj) {
    console.log(`${personObj.name} department is CSE`); //this er jaigai ekhon personObj diye access korte hobe.. karon ekhane this nijer Class er vitorer property gulake own kore.... jar karone bairer obj ke this diye access kora jabena
  }

  // 4. Get access from Child
  university(uniDet) {
    console.log(uniDet);
  }
  // 5. Get access from Child by child's constructor
  college(clgDet) {
    return clgDet;
  }
}

jitu = new Person("Md. Jidanul Hakim Jitu", "20-...-3");

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
  constructor(name, id) {
    super(name, id); // super methods refer to the parent class. super method call korar maddhome amra parents constructor method ke call kori and parents er shob property r access peye jai.. Parent er constructor function er parameter e je elment ache, super er argument e shegula pathai dte hobe.. noito jei argument ta pathabona.. oita access kora property te 'undefined' dekhabe

    // (For 5) Passing In Parent Property from the child by Constructor method..
    this.college(this.passingInParent2()); // this er moddhe jehetu Student Class er o shob property ache tai 'this.Student Property' k 'this.college() method' er argument akare pass kore dsi.... Jeta Person Class er 'college() method' parameter akare receive kore return kore dcche upore
  }

  // (For 1)
  showFromParent() {
    return this.activities(); // super method call korar maddhope amra this er moddhe parent er shob property r access peye gecchi.. ebar just this.propertyName diye baki shb kichu kaje lagaite parbo amra...
  }

  // (For 4)
  passingInParent() {
    const uniDetails = {
      name: "AIUB",
      noOfStudents: "11000",
      Estimated: "1996",
    };
    return this.university(uniDetails);
  }

  // (For 5) Passing In Parent Property from the child by Constructor method..
  passingInParent2() {
    const clgDetails = {
      name: "Port College",
      noOfStudents: "1100",
      Estimated: "2015",
    };
    // return this.university(uniDetails);
    console.log(clgDetails);
  }
}

sakib = new Student("Sakib", "20-...-2");

sakib.showFromParent();
sakib.passingInParent();
