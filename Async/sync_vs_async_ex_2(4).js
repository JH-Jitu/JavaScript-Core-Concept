// In async-await.. from => sync_vs_async_ex_2(3).js

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

const finishingProcess = async () => {
  await takeOrder("Customer-1");
  await processedOrder("Customer-1");
  msg = await completedOrder("Customer-1");
  console.log(msg);
};

finishingProcess();
