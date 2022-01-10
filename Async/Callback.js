// Asynchronous JavaScript: Callback Function

const completedCredit = 58;
const result = 3.97;

function registrationFor5thSem(callbackForScholarship) {
  console.log("Registration for 5th semester on Progress.........");

  setTimeout(() => {
    if (completedCredit >= 48) {
      callbackForScholarship(); // E ekta function deserve kore tai parameter akare amader ekta function receive korte hobe.. not function call
    } else {
      console.log(
        "Your requirements are not fulfilled for registration for 5th semester!"
      );
    }
  }, 2000);
}

function scholarship(callbackForPercentage) {
  console.log("Scholarship on Progress.........");

  setTimeout(() => {
    if (result >= 3.8) {
      callbackForPercentage(); // E ekta function deserve kore tai parameter akare amader ekta function receive korte hobe.. not function call
    } else {
      console.log("Your requirements are not fulfilled for scholarship!");
    }
  }, 3000);
}

function percentageOfScholarship() {
  console.log("Percentage of scholarship on progress..........");

  setTimeout(() => {
    if (result >= 3.95) {
      console.log("You will get Upto 75%");
    } else if (result >= 3.9) {
      console.log("You will get Upto 50%");
    } else {
      console.log("You will get Upto 25%");
    }
  }, 2000);
}

registrationFor5thSem(function () {
  scholarship(percentageOfScholarship);
});
// EKhane 'registrationFor5thSem' function call korar shomoi ekta 'callback' function parameter hishebe chai.. Tai argument hishebe amake ekta function er body dte hobe jate shathe shathe execute na hoi, call kora jabena (call korle execute hoe jai)...

// ekhon problem holo function er body jodi di tobe oi function er jodi abar parameter thake tobe shetar argument shoho ami directly pathaite parbona.. tokhon pathaile abar function ta call hoe jabe.. ar call howa mane kono condition fulfill kora charai execute hoe jabe.. Like, registrationFor5thSem(scholarship(percentageOfScholarship)) jodi di.. erokom hole 'scholarship' function tai call hoe jabe directly, function er body ta ar jabena... Kintu ami chacchi argument shoho 'scholarship' function er body take registrationFor5thSem() er parameter e pathaite.. jate 'registrationFor5thSem()' er jokhon call kora dorkar tokhon call kore nite pare.. karon function diye pathale shathe shathe execute hobena, jokhon 'registrationFor5thSem()' function etake call korbe, tokhon ei execute hobe....

// To ekhane 'scholarship' function ta call/invoke korbo tokhon jokhon registrationFor5thSem er vitor callbackForScholarship() function ta call/invoke korbo.. Tai amra ekta 'Anonymous function' nite pari, jetar body te amra scholarship function ta call/invoke...  to eta execute hobe  tokhon ei jokhon callbackForScholarship() function er vitor etake call kora hobe.. r ei anonymous function execute howa manei scholarship(percentageOfScholarship) function call howa.. Tahole ekhon shob maintain kora jabe...

// Or arekta function niye shetar body te scholarship(percentageOfScholarship) k call/invoke korte pari.. ar registrationFor5thSem() er argument e oi function ta diye dte pari... shei khetre, je function ta niyechi sheta call korlei scholarship(percentageOfScholarship) call hobe.. For example,
/*
 * Title: Alternative example,
    function insideHere() {
      scholarship(percentageOfScholarship);
    }
    registrationFor5thSem(insideHere);
 * 
 */

// ..............Wrong Process............
// Jodi evabe call kori.....
// registrationFor5thSem(scholarship(percentageOfScholarship)); // callbackForScholarship() ekta function deserve kore, tai registrationFor5thSem() function er parameter akare amader ekta function receive korte hobe.. not function call
