// In Asynchronous way (More readable code from=> SynchronousVSAsynchronous2.js)

const takeOrder = (customer, callback) => {
  console.log(`Taking Order from Customer ${customer}`);
  callback(customer);
};

const processedOrder = (customer, callback) => {
  console.log(`Processing Order from Customer ${customer}`);

  setTimeout(() => {
    console.log(`Cooking completed for ${customer}`);
    console.log(`Order processed of ${customer}`);
    callback(customer);
  }, 3000);
};

const completedOrder = (customer) => {
  console.log(`Order Completed of ${customer}`);
};

// Calling with arrow function
takeOrder("customer-1", (customer) => {
  //Ekhane anonymous function er Parameter e customer dewa hoeche.. r upore callback function call korar shomoi tokhon argument e value hishebe customer er naam diye dewa hocche.. jaar fole processedOrder() ei function call korar shomoi argument e je customer dewa hoeche tar value hishebe customer er name ei pass hobe.. same jinish processedOrder() function er 2nd parameter er khetreo ghorbe.. oi anonymous function, mane callback function ta call korar shomoi argument e value dewar por 'customer' e shetai store hobe..
  // TakeOrder function ta 2ta parameter receive kore.. jar moddhe ekta customer er naam, arekta callback function.. so shekhane ekta anonymous function diye shekhane processedOrder ke call kore diyechi jate takeOrder or proyjon er time e ow callback function k call korlei processedOrder call hoe jai
  processedOrder(customer, (customer) => {
    //ProcessedOrder o 2ta parameter receive kore jaar moddhe ekta customer, arekta tao callback function.. jaate processedOrder er moddhe callback function k call korlei completeOrder ta call/invoke hoe jai
    completedOrder(customer); //completeOrder just ekta parameter receive kore, sheta holo customer er naam
  });
});

/*
 * Title: Invoking all functions/works sequentially 
 * Description: 
 * 
takeOrder("customer-1", (customer) => {
    //Ekhane anonymous function er Parameter e customer dewa hoeche.. r upore callback function call korar shomoi tokhon argument e value hishebe customer er naam diye dewa hocche.. jaar fole processedOrder() ei function call korar shomoi argument e je customer dewa hoeche tar value hishebe customer er name ei pass hobe.. same jinish processedOrder() function er 2nd parameter er khetreo ghorbe.. oi anonymous function, mane callback function ta call korar shomoi argument e value dewar por 'customer' e shetai store hobe..

  // TakeOrder function ta 2ta parameter receive kore.. jar moddhe ekta customer er naam, arekta callback function.. so shekhane ekta anonymous function diye shekhane processedOrder ke call kore diyechi jate takeOrder or proyjon er time e ow callback function k call korlei processedOrder call hoe jai

  processedOrder(customer, (customer) => {
    //ProcessedOrder o 2ta parameter receive kore jaar moddhe ekta customer, arekta tao callback function.. jaate processedOrder er moddhe callback function k call korlei completeOrder ta call/invoke hoe jai
    
    completedOrder(customer); //completeOrder just ekta parameter receive kore, sheta holo customer er naam
  });
});

 */

// Traditional Function

// takeOrder("customer-1", function (customer) {
//   processedOrder(customer, function (customer) {
//     completedOrder(customer);
//   });
// });
