function stopWatch() {
  var startTime = Date.now();

  function getDelay() {
    console.log(`Executed in ${(Date.now() - startTime) / 1000} seconds`);
  }
  return getDelay;
}

const getDelay = stopWatch(); // Stopwatch function ta call korar shathe shathei startTime execute hoe geche.. r stopWatch function er closure e set hoe geche.. ekhon ami joto expensive delayed kaaj ei korina keno tar por jodi getDelay function ke call kori startTime ta closure e set hoi jawar karone eta khuje pawa jabe.. mane same thakbe
getDelay();

const currentTime = Date.now();
for (let i = 0; i <= 100000000; i++) {
  Math.random() * 10000000000000;
}
getDelay();

while (Date.now() <= currentTime + 2000);
console.log("After: ", (Date.now() - currentTime) / 1000, "seconds delay");

console.dir(getDelay); // Dekha jacche stopWatch function call korar por startTime jokhon execute hoe geche, er por joto intensive operation ei amra chalaina keno startTime ke stopWatch er closure mone rakhbe.. r getDelay call korar time e Date.now() theke startTime baad diye, execution time ta dekhabe..

getDelay();
