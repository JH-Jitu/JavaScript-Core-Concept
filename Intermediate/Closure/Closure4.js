// Closure variable ta refer kore rakhe.. value mone na rekhe tar proof..

(function () {
  let num1 = 5;
  let num2 = 10;

  function sum() {
    return num1 + num2;
  }
  console.log(sum());
  console.dir(sum); // eikhane closure er moddhe dekha jabe num1: 15 and num2: 20 hoe geche.. Karon closure er moddhe num1 and num2 er reference chole giyechilo.. jar fole jokhon ei num1 = 15 and num2 = 20 dewa hoeche tokhon ei reference e value hishebe 15 and 20 chole gese.. r closure memory k refer kore remember kore rakhe bidhai, closure e value 15 and 20 pawa jacche..

  num1 = 15;
  num2 = 20;

  console.log(sum());
  console.dir(sum);
})();
