// Tobe jodi function ta arekta function return kore.. ar jodi oi function er moddhei variable gular value dewa thake.. For example,
function sumFunc() {
  const num5 = 25;
  const num6 = 30;
  function sum3() {
    return num5 + num6; // SumFunc theke value newar maddhome ekhane main closure ta pabe.. dir korle dekha jabe num5, num6 closure er moddhe ache scope er..
    // return num5; // Jodi ekta number access kori tobe closure e just 1ta number ei refer kore rakhbe.. Baki gula baad diye dbe.. Orthat, parent er shudhumatro jei value gula ami local function tate access korte chai shei value gulai javascript intelligently closure er maddhome refer kore rakhbe
  }
  return sum3;
}
const getFromSum3 = sumFunc(); // Const er karone getFromSum3 te Script Scope er closure ta jabe..
console.dir(getFromSum3);
