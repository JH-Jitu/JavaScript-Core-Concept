function myFunc(params) {
  console.log(params);
}

// Bubbling => Vitore jeta ache sheta age print hobe ar bairer ta pore.. for example, ekhane button hocche container er vitor.. event listen korle dekha jai age button er kaaj hocche pore container er.. etake bole Bubbling
const container = document.getElementById("container");
const button = document.getElementById("button");

container.addEventListener("click", () => {
  console.log("Hello container Clicked");
});

button.addEventListener("click", () => {
  console.log("Hello Button Clicked");
});

// Capturing => By default javascript bubbling kore.. jodi age bairer ta ar porer vitor er ta dekhaite hoi, shetake bole capturing.. eta korar jonne event listener er 3rd parameter hishebe 'true' bole dte hobe..

const container2 = document.getElementById("container2");
const button2 = document.getElementById("button2");

container2.addEventListener(
  "click",
  () => {
    console.log("Hello container 2 Clicked");
  },
  true
);

button2.addEventListener(
  "click",
  () => {
    console.log("Hello Button 2 Clicked");
  },
  true
);

const hoverBtn = document.querySelector("#hoverBtn");
const hoverRemover = document.querySelector("#hoverRemover");

function hoverRandom() {
  console.log(Math.floor(Math.random() * 2));
}

hoverBtn.addEventListener("mouseover", hoverRandom);

function hoverRemoverFunc() {
  hoverBtn.removeEventListener("mouseover", hoverRandom);
}

hoverRemover.addEventListener("click", hoverRemoverFunc);
