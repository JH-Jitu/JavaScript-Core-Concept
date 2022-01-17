const inputElement = document.querySelector("input[type='text']");
inputElement.addEventListener("input", (event) => {
  console.log(event);
  console.log(event.target.value);
});
//  Erokom input ache, blur, focus, keyup,  keydown, cut, paste etc etc ache...

// const name = "name";
// const email = "email";
function handleSubmit() {
  const form = document.forms["testing"];
  const input1 = form.name;
  const input2 = form.email;

  if (input1.value === "" && input2.value === "") {
    alert("Fill up the form!");
    return false;
  }
  console.log(input1);
  console.log(input2);
}

// In Form two

const form2 = document.querySelectorAll("form")[1];
const inputElement2 = document.querySelector("input[type='text']");
console.log(form2);
form2.addEventListener("submit", (event) => {
  event.preventDefault(); //prevent default er maddhome action/loading prevent kora jai
  console.log(event);
});
