//Program to greet a person given thier first and last name 
function greet(salutation,firstname,lastname){
  console.log(`${salutation} ${firstname} ${lastname}`);
}
let firstname = "Arup";
let lastname = "Baral";
greet("Hello",firstname,lastname);

//Program to greet on the basis of gender
function greetBasisOfGender(firstname,lastname,gender){
  if(gender == "male"){
    greet("Hey",firstname,lastname);
  }else{
    greet("Hello",firstname,lastname);
  }
};

//Program to count 0 to 1000
let answer = 0;
for(let i = 0;i<=1000;i++){
  answer+=i;
};
console.log(answer);
let isMarried = false;
console.log(`${firstname} is${isMarried?"":" not"} married`);

let arr =[1,2,6,8,3,2,9,1];
arr.map((el)=>{
  if( !isNaN(el) && !(el%2)){
    console.log(el);
  }
});

const maxElement = Math.max(...arr);
console.log(maxElement);
console.log(arr.reduce((el,max) => Math.max(max,el)));
