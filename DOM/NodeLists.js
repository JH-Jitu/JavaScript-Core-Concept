/*
 * Title: NodeList VS NodeCollections
 * NodeList: NodeList hocche ekta object, jeta hocche muloto document er node gular node gular ekta collections or list. (Collection of different types of nodes)
 * NodeList object is almost the same as an HTMLColletion object
 * NodeList items ke only index number diye access kora jai
 * NodeList e
 *
 * HTMLCollection: HTML collection hocche, collection of different types of elements.
 * HTMLCollection items ke name, id, or index number diye access kora jai
 *
 */

const divOfDemo = document.getElementById("demo");

const HTMLCollectionsOfDemo = divOfDemo.getElementsByTagName("p");
const nodeListsOfDemo = divOfDemo.querySelectorAll(".hello");

console.dir(HTMLCollectionsOfDemo);
console.dir(nodeListsOfDemo);

console.log(HTMLCollectionsOfDemo["one"]); // eta name diye access kora jacche
console.log(nodeListsOfDemo["two"]); // kintu nodeList ke name diye access kora jacchena => undefined dekhabe.. only index diye access kora jabe

// HTMLCollectionsOfDemo.forEach((pTagHtmlCol) => console.log(pTagHtmlCol)); // TypeError: HTMLCollectionsOfDemo.forEach not a function
nodeListsOfDemo.forEach((pTagNodeList) => console.log(pTagNodeList.firstChild));
