// Hoisting hocche JavaScript er ekta default behavior jeta declaration gulake current scope er upore move kore
// Hoisting is the default behavior of moving declarations to the top of the current scope

// Details: https://zonayed.js.org/basic/post-14

summation(5, 6);

function summation(a, b) {
  // a, b local Scope
  console.log(a + b);
}

// যেহেতু হোইস্টিং ডিফল্ট বিহেভিয়ার, তাই জাভাস্ক্রিপ্ট এ সব ফাংশনগুলো ক্রিয়েশন ফেজে হোইস্টেড করা থাকে। এজন্যে আসলে আমরা চাইলে একটা ফাংশন ডিক্লেয়ার করার আগে সেটাকে কল করতে পারি।

/*
কাজ করার কারণ ক্রিয়েশন ফেজে জাভাস্ক্রিপ্ট এর ডিফল্ট বিহেভিয়ারের জন্যে। আমি ক্রিয়েশন ফেজ নিয়ে গত পর্বে আলোচনা করেছিলাম, তারপরেও সুবিধার্থে এখানেও কিছু পয়েন্ট তুলে ধরলামঃ

ফাংশনে যতগুলো আর্গুমেন্ট পাস করা হয়েছে সেগুলার আর্গুমেন্ট লিস্ট তৈরী করা হয়
কোড সব ফাংশন স্ক্যান করে এবং প্রত্যেকটা ফাংশন একটা ভ্যারিয়েবল অবজেক্ট এ স্টোর করা হয় যেটা সাধারণত ফাংশনটাকে পয়েন্ট করে।
তারপর কোড ভ্যারিয়েবল এর ডিক্লেয়ারেশনগুলো খোঁজ করে। এবং প্রত্যেকটা ডিক্লেয়ারকৃত ভ্যারিয়েবলের জন্যে undefinedপ্রপার্টি সেট করে দেয়।
তারপর কোড এক্সিকিউশেন ফেজে যায় এবং এক্সকিউশেন কন্টেক্সট অনুযায়ী লাইন বাই লাইন কোড এক্সিকিউট হয়।

আর এজন্যেই ফাংশন ডিক্লেয়ারেশন আগে আগে ক্রিয়েশন ফেজে থাকার কারনে এবং ফাংশন কল এক্সিকিউশেন ফেজে এক্সিকিউট হওয়ার কারণে আমরা ফাংশন ডিক্লেয়ার করার আগেও চাইলে ব্যবহার করতে পারি।
*/

a = 5;
console.log(a);

var a; //upore niye, x = undefined set kore nei.. x er jonne memory te jaiga kore nei..
// let a;  // let/const upore niye, x = undefined set korte parena.. x er jonne memory te jaiga kore nite parena.. // => Return reference error => Karon var declare korar shathe shathe value hishebe undefined set kore nei..ar let declare kore just..

// var/let 2tatei hoisted hoi kintu let memory te jaiga kore nite parena undfined set kore

/*const er khetre hoisting hoina karone 
const carName;
carName = "Volvo" //evabei likha jaina... ekebare declare korte hoi
evabe, 
const carName = "Volvo"
*/

// Important Example;
var name1 = "Jitu";
var name2 = "Sakib";
console.log(name1, name2);
/*
var name1;
var name2;
name1 = "Jitu";
name2 = "Sakib";
*/

var name3 = "Rafi";

console.log(name3, name4);
var name4 = "Sunny";
/*
var name3; 
var name4;  //hoisting => declaration ke upore tule felse
name3 = "Jitu";
name4 = "undefined";    //jehetu kichu painai.. just declare take upore tulai undefined set kore nise.. ar kono value na pawai undefined kei result hishebe dekhaise
*/
