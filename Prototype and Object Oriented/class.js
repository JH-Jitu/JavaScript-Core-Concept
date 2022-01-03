class Person {
  constructor(name, age) {
    //Parent Class
    this.name = name;
    this.age = age;
  }

  programming() {
    console.log(
      `${this.name} is programming.\nHe is expert in ${this.expertise}`
    );
  }

  //To check Polymorphism
  checkPolymorphism() {
    console.log("Checking Polymorphism in Person Class");
  }
}

class Programmer extends Person {
  constructor(name, age, expertise, experience) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.expertise = expertise;
    this.experience = experience;
  }
  exp() {
    console.log(`${this.name} has ${this.experience} year experience`);
  }

  set setLearn(learnt) {
    this.learnt = learnt;
  }

  get getLearn() {
    console.log(`${this.name} has learnt ${this.learnt} in 1 year`);
    return this.learnt;
  }

  //Static er shathe Object er kono relation nai..shb Class er shathe relation
  static checkNotStatic() {
    console.log(
      `This function can't return ${this.name}, ${this.expertise} and more object properties......\nThis function returns name as Person not the Object name`
    );
  }

  static checkStatic(person1) {
    console.log(
      `But this function returns ${person1.name}, ${person1.expertise} and more object properties......`
    );
  }

  //To check Polymorphism
  checkPolymorphism() {
    console.log("........................");
    super.checkPolymorphism();
    console.log("Checking Polymorphism in Person's child Programmer Class");
  }
}

const Jitu = new Programmer("Jitu", 21, "Javascript", 1.5);
Jitu.programming();
Jitu.exp();
Jitu.setLearn = "React";
console.log(Jitu.learnt);
console.log(Jitu.getLearn);

//calling Static function......Static er shathe Object (Jitu or onno kono name) er kono relation nai..shb Class er shathe relation...Static function k direct Class Name diye call korte hoi
// Object er name diye Static Function call korle kaaj korbena
Programmer.checkNotStatic();
Programmer.checkStatic(Jitu);

// Kono ekta Child/inherited class tar Parent Class k modify korar process kei bola hoi Polymorphism
Jitu.checkPolymorphism();
