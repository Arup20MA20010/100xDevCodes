// Counter to count from 30 to 0
let cnt = 30;
function counter(){
  if(cnt<0){
    console.log("Cannot count to less than 0");
    return;
  }
  console.log(cnt--);
}


function resetCounter(){
  cnt = Math.min(cnt+1,30);
}

function resetCounterToInitialValue(){
  cnt = 30;
}

