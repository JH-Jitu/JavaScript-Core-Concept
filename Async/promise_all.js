const promise1 = Promise.resolve("Hello World 1");

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello World 2 after 3 seconds");
  }, 3000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello World 3 after 5 seconds");
  }, 5000);
});

const startingTime = new Date().getTime();

// Ekadhik promise er evabe alada alada kore value pawa jai
// promise1.then((value) => console.log(value));
// promise2.then((value) => console.log(value));

// Promise.all() =>  ekadhik promise er resolve er array return kore. Tobe ei khetre max async ti execute hote jotokhon lagbe overall array return korte shei shomoi nibe For example,
Promise.all([promise1, promise2, promise3]).then((value) => {
  console.log(value);

  const currentTime = (new Date().getTime() - startingTime) / 1000;
  console.log(`Execution Time: ${currentTime} seconds`);
});

// Promise.race() => eta Promise.all() er moto argument er array te dewa shb promise kei execute kore tobe jei async-tar kaaj age shesh hoe jai sheta return kore dei..execution time minimum async function er execution time er shoman hobe.. Tobe program ti purapuri run hote maximum  async er shoman time lagbe
// Promise.race([promise2, promise3]).then((value) => {
//   console.log(value);
//   const currentTime = (new Date().getTime() - startingTime) / 1000;
//   console.log(`Execution Time: ${currentTime} seconds`);
// });
