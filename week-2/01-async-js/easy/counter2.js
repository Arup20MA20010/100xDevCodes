let counter = 0;
for (let i = 1; i <= 30; i++) {
  setTimeout(() => {
    counter++;
    console.log(counter);
  }, i * 1000);
}
