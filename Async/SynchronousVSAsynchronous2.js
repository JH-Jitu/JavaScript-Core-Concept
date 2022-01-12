// In Asynchronous way

const processOrder = (customer) => {
  console.log("Processing order for customer 1");

  setTimeout(() => {
    console.log("Cooking Completed!");
  }, 3000);

  console.log("Order Processed for Customer-1");
};

console.log("Take Order from Customer-1");

processOrder();

console.log("Completed The order of Customer-1");
