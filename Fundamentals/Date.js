const d = new Date(2018, 11, 24);
const dReadable = new Date();
console.log(dReadable.toDateString());

// nijer moto kore korte chaile
var today = new Date(2018, 3, 4);
var dd = String(today.getDate()).padStart(2, "0"); //digit ta jodi 1ta thake tobe shetake 2 no position e niye giye baki take 0 diye replace kore dewa 'padStart()' method er kaaj
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = dd + "-" + mm + "-" + yyyy;
console.log(today);
