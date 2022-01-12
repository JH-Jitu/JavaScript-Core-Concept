// In Synchronous way

const processOrder = (customer) => {
  console.log("Processing order for customer 1");
  currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());

  console.log("Cooking Completed for customer-1");

  console.log("Order Processed for Customer-1");
};

console.log("Take Order from Customer-1");

processOrder();

console.log("Completed The order of Customer-1");
