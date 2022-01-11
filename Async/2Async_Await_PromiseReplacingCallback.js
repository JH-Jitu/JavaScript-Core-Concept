const completedCredit = 58;
const result = 3.97;

function registrationFor5thSem() {
  console.log("Registration for 5th semester on Progress.........");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (completedCredit >= 48) {
        resolve();
      } else {
        reject(
          "Your requirements are not fulfilled for registration for 5th semester!"
        );
      }
    }, 2000);
  });
  return promise;
}

function scholarship() {
  console.log("Scholarship on Progress.........");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (result >= 3.8) {
        resolve();
      } else {
        reject("Your requirements are not fulfilled for scholarship!");
      }
    }, 3000);
  });
  return promise;
}

function percentageOfScholarship() {
  console.log("Percentage of scholarship on progress..........");

  const promise = new Promise(function (resolve) {
    setTimeout(() => {
      if (result >= 3.95) {
        resolve("You will get Upto 75%");
      } else if (result >= 3.9) {
        resolve("You will get Upto 50%");
      } else {
        resolve("You will get Upto 25%");
      }
    }, 2000);
  });
  return promise;
}

// All invocation in finalRegistration (Receiving the promises by async-await) => Ei function e amra shob gula asynchronous kaaj/function gula invoke korbo await use kore.. karon egula ek ekta promise return kore.. r await=> ekta function ke promise er jonne wait korai..
async function finalRegistration() {
  //async function nijeo promise return kore
  try {
    await registrationFor5thSem(); //Async chara await kaaj korbena.. Await er karone ei promise-ta fully execute kora or fulfill kora chara porer line she execute korbena.. Mane hocche, await=> ekta function ke Promise er jonne wait korai
    await scholarship();
    msg = await percentageOfScholarship();
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
}

// Then, just last function tai invoke kore dbo
finalRegistration();
