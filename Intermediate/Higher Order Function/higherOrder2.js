/*
 * Title: Higher Order Function
 * Description: Higher Order function holo emon ek dhoroner function, jeta onno function er upor kaaj kore... Sheta hote pare onno function k parameter hishebe niye, or onno function k return kore diye.. Or can be both
 * Author: Jitu
 *
 */

// something() name e ekta function arekta function ke simply return korche... Fole something() ekta higher-order function.. For example,
function something() {
  return function () {
    console.log("Something will be returned");
  };
}

something()(); // something ke call korar por shetar vitorer function call korar jonne abar call kora hoeche..

// bivinno array method like, map, filter, reduce etc. egula ek ekta higher-order function.. egula built-in higher-order function
