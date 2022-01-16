/*
 * Title: Navigating Between Nodes
 * Description: You can use the following node properties to navigate between nodes with JavaScript:
 * parentNode
 * childNodes[nodenumber]
 * firstChild
 * lastChild
 * nextSibling
 * previousSibling
 */

// Amra ekhane 'demo' ID er shob dekhbo

const divOfDemo = document.getElementById("demo");

const parent = divOfDemo.parentNode; // Will execute the div tag.. demo id tar parent hocche arekta div.. abr etar parent hocche body for example,
console.log(parent.parentNode); // Will return the body tag

// ................

// *****Important: Kono ekta 'id' er firstChild/childNodes egula define kore etar nijer moddhe kono text thakle ta... ar shegular .nodeValue diye vitorer text Value ta pawa jai... For example,
// 'demo' id-jukto div er moddhe jodi kono raw text thake.. ar amra jodi etar text ta dekhte chai...
const way1 = divOfDemo.firstChild.nodeValue;
const way2 = divOfDemo.childNodes[0];
const way3 = divOfDemo.innerHTML;

console.log(way1);
console.log(way2);
console.log(way3);

// demo er vitore aro koekta operation =>

allChildrenOfDemo = divOfDemo.childNodes;
console.log(allChildrenOfDemo); //div er id er moddhe protita element prothom tato text ei.. er shathe protita tag/element er por por ekta kore text thake... jegula oi div er por kono text  thakle shegulake define kore.. for example, ekhane jehetu 'demo' id te 3ta element dsilam amra.. to etar prothomei ekta text thakbe.. abr h1 er por ekta, then p gular por por ekta thakbe.. orthat prottektar por por ekta ekta text thakbe.. so, 3ta element thakle text thakbe 4ta..

const nextSiblingOfFirstChild =
  divOfDemo.firstChild.nextSibling.firstChild.nodeValue; // Jehetu firstChild define kore tar vitorer kono text thakle sheta... tai firstChild er next sibling e thakbe h1 tag mane amader dewa first tag ta... then tar vitorer value ke paite hole jaite hobe abar tar first child e.. then tar nodeValue te
console.log(nextSiblingOfFirstChild);

const previousSiblingOfFirstChild = divOfDemo.firstChild.previousSibling; // etar previous sibling er kono memory nei.. tai null dekhabe
console.log(previousSiblingOfFirstChild);

const ourLastElement = divOfDemo.lastChild.previousSibling.innerHTML; //firstChild e giye nodeValue k access kora charao innerHTML diye vitoer text k access kora jai
console.log(ourLastElement);

// NodeName
/*
 * Title: nodeName 
 * Description: The nodeName property specifies the name of a node.
        nodeName is read-only
        nodeName of an element node is the same as the tag name
        nodeName of an attribute node is the attribute name
        nodeName of a text node is always #text
        nodeName of the document node is always #document
 */

console.log(divOfDemo.childNodes[0].nodeName); // nodeName of an element node is the same as the tag name

const conversationId = document.querySelector("#conv");
const h1Tag = conversationId.nodeName; // nodeName of an element node is the same as the tag name
const h1TagText = conversationId.firstChild.nodeName; //nodeName of a text node is always #text
console.log(h1Tag);
console.log(h1TagText);
console.log(document.querySelector("#conv").attributes[1].nodeName); // nodeName of an attribute node is the attribute name // attributes[0] te custom attribute set kora
console.log(document.nodeName); // nodeName of the document node is always #document

// ............

// Kono ekta attribute er name ki dewa hoeche ta access korte chaile..
console.dir(document.querySelector("#conv").attributes[0].nodeValue);
