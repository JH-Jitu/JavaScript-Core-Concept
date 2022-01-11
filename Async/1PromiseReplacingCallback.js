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

registrationFor5thSem()
  .then(scholarship)
  .then(percentageOfScholarship) //Final kaaj jehetu percentageOfScholarship tai er then e ekta function niye value niye then sheta execute kora hoeche
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
