// In async-await.. from => sync_vs_async_ex_2(3).js

// In Asynchronous way (More readable code from=> SynchronousVSAsynchronous2.js)

const open = true;
const chefAvailable = true;

const takeOrder = (customer) => {
  console.log(`Taking Order from Customer ${customer}`);

  const promise = new Promise((resolve, reject) => {
    if (open) {
      resolve(customer);
    } else {
      reject("Restaurant is closed now!");
    }
  });
  return promise;
};

const processedOrder = (customer, callback) => {
  console.log(`Processing Order from Customer ${customer}`);

  const promise = new Promise((resolve, reject) => {
    if (chefAvailable) {
      setTimeout(() => {
        console.log(`Cooking completed for ${customer}`);
        console.log(`Order processed of ${customer}`);

        resolve(customer);
      }, 3000);
    } else {
      reject("Chef not available right now!");
    }
  });
  return promise;
};

const completedOrder = (customer) => {
  const promise = new Promise((resolve, reject) => {
    resolve(`Order Completed of ${customer}`);
  });
  return promise;
};

const finishingProcess = async (customer) => {
  try {
    await takeOrder(customer);
    await processedOrder(customer);
    msg = await completedOrder(customer);
    console.log(msg);
  } catch (error) {
    console.log(error);
  }
};

finishingProcess("customer-1");
// finishingProcess("customer-2");
