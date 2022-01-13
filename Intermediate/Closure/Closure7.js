// Closure in Asynchronous-1
var a = 10; // 'let' dileo same hobe.. tobe global scope er closure e na giye, script scope er closure hishebe add hobe

function inAsync() {
  function forTimeOutFunc() {
    console.log(a);
  }
  setTimeout(forTimeOutFunc, 3000);

  console.dir(forTimeOutFunc); // Dekha jacche global scope er closure e 'a' refer kora ache.. setTimeout function er moddhe jei function ta callback akare dewa hoeche sheta 3-seconds por web-api theke ashar pore global scope er closure e 'a' er memory reference thakar karone er tokhon 'at last e' ja set kora hobe ta pawa jabe..
}

a = 30; // Porobortite 30 dewar karone memory reference etar value 30 set kore niyeche

// a= 90; // ekhon 90 set korleo isAsync call korle 'a' er value 90 dekhabe, memory reference er karonei

inAsync();
