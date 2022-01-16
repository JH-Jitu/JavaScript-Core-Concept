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
