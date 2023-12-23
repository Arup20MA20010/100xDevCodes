let counter = 0;
const id = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter >= 31) {
    clearInterval(id);
  }
}, 1000);
