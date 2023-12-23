/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 1 sec");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 2 sec");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 3 sec");
    }, 3000);
  });
}

function calculateTime() {
  const start = Date.now();
  waitOneSecond()
    .then((data) => {
      console.log(data);
      console.log(`resolved after ${(Date.now() - start) / 1000}`);
      return waitTwoSecond();
    })
    .then((data) => {
      console.log(data);
      console.log(`resolved after ${(Date.now() - start) / 1000}`);
      return waitThreeSecond();
    })
    .then((data) => {
      console.log(data);
      console.log(`resolved after ${(Date.now() - start) / 1000}`);
    });
}
calculateTime();
