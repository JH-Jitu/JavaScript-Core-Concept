// Parent Class
function Student(name, dept) {
  this.name = name;
  this.dept = dept;
}

// Jodi amra Student template e kono Property/method add korte chai tobe prototype use kore korte parbo...
Student.prototype = {
  activities: function () {
    return `${this.name} is active in Computer Club`;
  },
};

const rafi = new Student("Rafi", "CSE");

console.log(rafi.activities());

// Child Class
// Jodi Arekta Function jetake Amra Student er shathe inherit korte chai.. mane Emon ekta function jeta Student er child hobe.. Tokhon,
function AccMembers(name, dept, recruited, sector) {
  Student.call(this);
  this.name = name;
  this.dept = dept;
  this.recruited = recruited;
  this.sector = sector;
}

AccMembers.prototype = Object.create(Student.prototype); // AccMembers theke Student er prototype er moddhe thaka method/property gula ke AccMembers theke access korar jonne object.create er argument e Student.prototype pass kora hoeche.. For example, ekhane activities() access kora jacche ekhon
// console.dir(AccMembers);
AccMembers.prototype.constructor = AccMembers; // Default constructor AccMembers k Local ta diye overwrite kora hoeche.. Karon AccMembers er default constructor er moddhe Student.call(this) method ta nai..
console.dir(AccMembers);

AccMembers.prototype.roll = function () {
  //evabe add korte hobe karon AccMembers er prototype ekhon directly Student prototype er access nibe Object.create korar karone
  return `${this.name} is General Secretary`;
};

const jitu = new AccMembers("Jitu", "CSE", "Spring-21", "Development");

console.log(jitu.activities());
console.log(jitu);
console.log(jitu.roll());
