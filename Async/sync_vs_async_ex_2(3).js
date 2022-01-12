// In Promise from => sync_vs_async_ex_2(2).js

// In Asynchronous way (More readable code from=> SynchronousVSAsynchronous2.js)

const takeOrder = (customer) => {
  console.log(`Taking Order from Customer ${customer}`);

  const promise = new Promise((resolve, reject) => {
    resolve(customer);
  });
  return promise;
};

const processedOrder = (customer, callback) => {
  console.log(`Processing Order from Customer ${customer}`);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Cooking completed for ${customer}`);
      console.log(`Order processed of ${customer}`);

      resolve(customer);
    }, 3000);
  });
  return promise;
};

const completedOrder = (customer) => {
  const promise = new Promise((resolve, reject) => {
    resolve(`Order Completed of ${customer}`);
  });
  return promise;
};

takeOrder("Customer-1")
  .then((customer) => processedOrder(customer)) // .then e 'customer parameter' shoho ami ekta function pass korchi.. Karon uporer resolve function hishebe invoke hobe and argument hishebe 'parameter e receive kora customer' dbe
  .then((customer) => completedOrder(customer))
  .then((value) => console.log(value));
