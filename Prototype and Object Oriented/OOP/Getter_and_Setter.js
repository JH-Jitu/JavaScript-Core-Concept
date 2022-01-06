// Class Declaration cannot be hoisted. So Class use korar age oi class er object amra make korte parbona...

class Developer {
  constructor(devName, stack) {
    this.devName = devName;
    this.stack = stack;
  }

  get dev() {
    console.log(`${this.devName} is expertise in ${this.stack}`);
  }

  set dev(changedName) {
    this.devName = changedName;
  }
}

developerDet = new Developer("Jitu", "MERN");
console.log(developerDet); //First e getter setter mute hoe ache jehetu access korinai.. object er getter setter er motoi

// Then, Access korar por getter fully active hobe
developerDet.dev; // Jehetu  getter ekta property tai parenthesis () diye invoke kora possible nah (warning dekhabe)

// Then, setter call korle.. setter er value argument hishebe nibe setter
developerDet.dev = "Fardin"; // EKhon dekha jabe setter er karone

// Abar Getter call korle dekha jabe,
// developer er name Fardin dekhabe.. Karon setter er argument hishebe ami Fardin pass kore chilam.. ar this.devName = argument er name ta diye diyechi
developerDet.dev; // Jehetu  getter ekta property tai parenthesis () diye invoke kora possible nah (warning dekhabe)
