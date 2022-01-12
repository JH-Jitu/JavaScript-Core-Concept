const d = new Date(2018, 11, 24);
const dReadable = new Date();
console.log(dReadable.toDateString());

// nijer moto kore korte chaile
var today = new Date(2018, 3, 4);
var dd = String(today.getDate()).padStart(2, "0"); //total digit jodi 1ta thake tobe shetake 2 no position e niye giye baki take 0 diye replace kore dewa 'padStart()' method er kaaj
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0! 0 theke 11 projonto month
var yyyy = today.getFullYear();

today = dd + "-" + mm + "-" + yyyy;
console.log(today);

const currentTime = new Date();
console.log(currentTime.toTimeString());

const date = `${currentTime.getDate()}-${
  currentTime.getMonth() + 1
}-${currentTime.getFullYear()}`;

const time =
  currentTime.getHours() +
  ":" +
  currentTime.getMinutes() +
  ":" +
  currentTime.getSeconds();
document.getElementById("currentTime").innerHTML = time;
