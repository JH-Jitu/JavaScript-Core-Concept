async function hello(params) {
  return "hello world!";
}

hello().then(function (value) {
  console.log(value);
});
