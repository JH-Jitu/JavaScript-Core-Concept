async function hello() {
  return "hello world!"; // hello function ta "hello world" likha take promise akare return korbe 'async' use korar karone
}

// Jehetu hello() function ekhon ekta promise return kore tai nicher system e amake value ta pete hobe.. jehetu await 'async' function er baire kaaj korena tai .then diyei function er parameter er maddhome value ta pawa jabe
hello().then(function (value) {
  console.log(value);
});
