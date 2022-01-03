// How Object.create looks like?

const captain = {
  name: "Mash",
  age: 36,
  country: "Bangladesh",
};

const player = Object.create(captain); //Object.create diye captain(parent) er shob property r boishishto player(child) peye gese

console.log(player.name); //child diye parent er property gula access kora jacche... (Player ta hocche child & captain ta hocche parent)
// jokhon player (child) er moddhe name property ta khuje pabena... tokhon she tar parent object e name khujbe..and khuje pawar por sheta return korbe
// egula she korte parei prototype er karone  //Karon prototype er moddhei tar parent er boishisto gula thakbe
