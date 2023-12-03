let sum = 0;
let total = 0;
for(let milliseconds = 1;milliseconds<=100;milliseconds++){
  let initialTime = Date.now();
  let timeTaken = 0;
  setTimeout(()=>{
    let finalTime = Date.now();
    timeTaken = (finalTime-initialTime-1000*milliseconds)/1000;
/*     console.log(timeTaken); */
    sum += timeTaken * milliseconds;
    total += milliseconds;
  },milliseconds*1000);
}

setTimeout(()=>{
  let answer = sum/total;
  console.log(answer);
},101*1000+10);
