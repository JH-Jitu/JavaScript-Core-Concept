const divOfDemo = document.getElementById("demo");

// suppose 'demo' id te ami kono element (<p>) add korte chacchi

const paraTag = document.createElement("p");
const insideTag = document.createTextNode("World: I'm Fine. You?");

paraTag.className = "world-chat";
paraTag.setAttribute("id", "world-chat");

// paraTag.appendChild(insideTag); // <p>World: I'm Fine. You?</p> //=> appendChild korar karone paraTag er modde insideTag ta child akare chole gese

// paraTag.append(insideTag); // <p>World: I'm Fine. You?</p> //=> append korar karoneo paraTag er modde insideTag ta child akare chole gese.. tobe append() e multiple argument diye multiple element add kora jai... For example,
const spanTag = document.createElement("span");
const insideSpanTag = document.createTextNode(" Bangladesh");
spanTag.append(insideSpanTag);
paraTag.append(insideTag, spanTag, document.createTextNode(" is not well")); // Ei je ekhane multiple argument pass kora hoeche... jegula paraTag er moddhe giye append hobe..

divOfDemo.appendChild(paraTag); //paratag er moddhe appendChild korar por ekhon insideTag o acche.. Tai Paratag k abar jodi divOfDemo er child akare di, tobe eta demo id er child hishebe add hoe display te dekhabe

//.........

// // first element hishebe insert korte chaile
const p1Tag = divOfDemo.getElementsByTagName("p");
// divOfDemo.insertBefore(paraTag, p1Tag[0]); // Eta run korle paraTag ta prothom p tag er age insert hoi jabe.... ar append child korte last e insert hobe

// ....................

// // To remove an element
// By using remove() => (doesn't support in older browsers)
// p1Tag[0].remove(); // divOfDemo er prothom p tag ta delete hoi jabe

// By suing removeChild => Efficient way... parentName.removeChild(je child ta remove korte chacchi)
divOfDemo.removeChild(p1Tag[0]);

// // To replace an element
// By usuing replaceChild() =>  parentName.replaceChild(jeta diye replace korte chacchi sheta, jetar shathe replace korte chacchi sheta)
//first create an element then I will replace this
const paraTagForReplace = document.createElement("p");
const insideTagForReplace = document.createTextNode(
  "World: Not Fine, Mr. Universe. I'm polluting day by day. People living here are so disgusting!"
);

paraTagForReplace.appendChild(insideTagForReplace);

divOfDemo.replaceChild(paraTagForReplace, p1Tag[p1Tag.length - 1]); // Last element er index holo (length-1) Last element er shathe replace korar jonne p1Tag[p1Tag.length - 1] use kora hoeche..
