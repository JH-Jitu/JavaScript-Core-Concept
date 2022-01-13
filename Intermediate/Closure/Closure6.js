// Closure in Asynchronous-1
function inAsync() {
  var a = 10;

  function forTimeOutFunc() {
    console.log(a);
  }
  setTimeout(forTimeOutFunc, 3000);

  console.dir(forTimeOutFunc); // Dekha jacche isAsync er closure e 'a' refer kora ache.. setTimeout function er moddhe jei function ta callback akare dewa hoeche sheta 3-seconds por web-api theke ashar poreo isAsync er closure e 'a' er memory reference thakar karone er maan peye geche.. okhan theke 'a' er value 10 pawa geche
}

inAsync();

// Jodi var a = 10; global scope e thakto tobe ta => closure7.js
