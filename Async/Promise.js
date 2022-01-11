/*
 * Title: Problem in Callback.js
 * Description: Amra age jei method e Callback call korechi.. like, pore jei kaaj ti korte hobe, shetake callback akare present kaaje pathiye diye kaajer time e call kore niyechi.. 
 * kintu ei method e problem ache.. For example,
        registrationFor5thSem(function () {
        scholarship(percentageOfScholarship);
        }); 
 * ei method e jodi onk gula asynchronous kaaj thake, tokhon jinish take bole 'callback hell'..
        Like, 
a(function () {
  b(function () {
    c(function () {
      d(function () {
        e(function () {
          f(percentageOfScholarship);
        });
      });
    });
  });
});
uporer moto erokom hoe jabe.. tokhon maintain kora tough hoe jabe.. Shejonnoi 'Promise' er use hoi

 */

// So let's start with Promise

const isPermitted = true;

console.log("Task-1: Gate Opened!🚪👋"); //Task-1 done- Synchronous work

// Promise definition - Producing Code      (May take some time)
// Promise function 2ta parameter.. 1. Resolve: for success & 2. Reject: for getting error
const promise = new Promise(function (resolve, reject) {
  console.log("Concert will start soon........💃"); //Task-2 will execute after finishing the task of setTimeOut..

  setTimeout(() => {
    if (isPermitted) {
      resolve("Task-2: Concert Started 🤘🎸😎");
    } else {
      reject("Police stopped the concert😡😟😭");
    }
  }, 3000);
});

// Promise Call/Execute - Consuming Code    (Have to wait for fulfilling a Promise)
promise
  .then(function (value) {
    //.then diye ami promise er por ki korte chai sheta execute korte pari.. function e parameter er value akare Promise function er Resolve() er argument e ja pass kore ta pawa jabe..
    console.log(value);
  })
  .catch(function (err) {
    //.catch diye error or other jinish collect kore function er maddhome and shetake execute kore
    console.log(err);
  });

console.log("Task-3: Meet and handshake with friends!🤝🍟"); //Task-3 done- Synchronous work
