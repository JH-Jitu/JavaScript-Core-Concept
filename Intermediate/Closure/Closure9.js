// Deep Understanding of CLOSURE

// Function in Global Scope in For LOOP (Synchronous)
for (let index = 0; index < 3; index++) {
  // Ekhane var/let dile same output dibe..
  const f = () => {
    console.log("Synchronous:", index); // Ekhane closure er dorkar hocche na.. karon function ta global scope er moddhei ache.
  };
  f();
}

// Function in an asynchronous function in For LOOP (With let)
for (let j = 0; j < 3; j++) {
  // let hocche block scope, jar fole j ta only for-loop er vitore kaaj korbe..
  // Ekhane var/let dile same output dibe..

  // setTimeout er vitore jei function ta ache she function ta 3second por call hobe, for-loop jotobar cholbe totobar
  setTimeout(() => {
    console.log("Asynchronous (let):", j); // setTimeout er vitore jokhon load ta cholche, prothom j=0 jokhon, tokhon setTimeout function ta execute howa shuru korbe.. Tokhon obosshoi setTimeout-ke closure use kore 'j' er reference ta set kore nite hobe...Karon j hocche setTimeout er parent scope e.. .erpor Loop shesh hoe jokhon setTimeOut er vitorer function ta 3second por 'web-api' theke eshe call hobe, tokhon closure theke 'j' er value refer kore pabe...

    // let jehetu block scope, tai jokhon web-api theke eshe j nijei loop er moddhe increment hoe geche.. mane new j er value create hoe sheta refer korche Closure e.. to jokhon Closure reference check korbe tokhon reference er moddhe block scope er karone loop er moddhe 'j' increment hoe change hocche jehetu, tai dekha jabe, prottekbar incremented value ta store hoe geche.. r prottekbar incremented value ta she return korbe.. r ete closure e 'j' prottekbar alada alada value ke refer korai, 'j' shei maan gula alada alada vabe output e show korbe

    // kintu var hocche Function scope, tai for(var j=0) dewa ar upore var j; dewa same.. eta global scope e chole jabe.. Fole asynchronous function e closure set howar time e ekta single j er reference closure e geche, mane global scope er 'j' er reference ta closure e set hoeche.... let er moto block scope er j er maan set hoinai... jehetu setTimeout execute kora shuru kore for-loop shesh howar por.. tai jokhon web-api theke function ta ashbe totokhon j shesh porjnto increment hoe 3 hoe geche.. to closure e jehetu global scope er 'j' k refer kore chilo, tai closure er value 3 store hoe jabe ar output e 'j' er 3bar loop er karone 3ta 3 show korbe.. For example, niche for loop e (var k=0) diye arekta loop chaliye dekhano holo
  }, 3000);
}

// Function in an asynchronous function in For LOOP (With var)
for (var k = 0; k < 3; k++) {
  setTimeout(() => {
    console.log("Asynchronous (var):", k);
  }, 3000);
}
console.log("Value of K: ", k); // var Function Scope, ekhane globally for-loop thakai 'k' global scope e set hoe geche.. Fole k er maan loop er baireo access kora jacche.. kintu let dile k er maan access kora jetona... Tai ekhane jokhon async function er closure 'k' er value refer kora dei tokhon ei global scope ker 'k' kei refer kore.. erpor Loop jokhon shesh hoi, erpor web-api theke eshe dekhe, global scope er k=3 hoe geche, tokhon 'loop er console e k 3bar er jonne 3bar output dekhai' tobe prottekbar-ei global-scope er 'k' ke refer kore bidhai, 'k' er maan prottekbar 3 dekhai
