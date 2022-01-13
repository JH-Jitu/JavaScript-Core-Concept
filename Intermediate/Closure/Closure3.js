var num1 = 5;
var num2 = 10;

// Nested function er khetre jei function tar value kono ekta child function e access kora lagbe shudhu matro shei function tar ei closure er value thakbe.. For example,
function sum() {
  var num3 = 15;

  return function () {
    return num1 + num2 + num3; // Ekhane dekha jabe Global Scope and Closure scope 2ta kei she niyeche karon etar immediate parent theke she num3 niyeche.. dir korle dekha jabe num3 ke access korar karone sum() function er closure e nume er reference add hoe geche
    // return num1 + num2; // Kintu jodi num3 ta access na kora hoi or, etar immediate parent theke  tobe 'sum function' er Closure scope tai chole jabe, jehetu num3 or etar kono kichu k tar mone rakhar dorkar nei
  };
}
const getFromSum = sum();
console.dir(getFromSum);

// More nested Function er khetre
function multiplication() {
  //1
  var num4 = 1;
  return function () {
    //2
    var num5 = 2;
    return function () {
      //3
      var num6 = 3;
      return function () {
        return num1 * num4 * num5 * num6;
      };
    };
  };
}

const multiply1 = multiplication()()();
console.dir(multiply1); // Jehetu multiplication function er porer shob koitai anonymous function chilo, tai closure gular name dekha jacchena.. Tobe bujha jacche je jehetu multiplication shesh porjnto jei child function ta return koreche, sheta jotogula function er value ke access koreche totogula function er closure k dekhabe.. Orthat, closure shei value gula refer kore rakhbe
