function apiFunc(url) {
  const load = (loading = true) => {
    if (loading) {
      console.log("Loading......");
    } else {
      console.log("Got the data");
    }
  };
  load(true);
  //   Asynchronous work
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      load(false);
      console.log(data);
      console.log(url); // Ekhane url access korte chaile closure e url er reference thakar karone url er value pawa jabe..
    })
    .catch((err) => console.log(err));

  //   const jsonData = await fetch(url);   // eta korte hole function ke async kore nite hobe
  //   const data = await jsonData.json();
  //   console.log(data);
}

apiFunc("https://jsonplaceholder.typicode.com/todos/1");
console.log("Hello World!");
