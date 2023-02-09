function nameOfFuction() {
  console.log(5 + 5);
}

nameOfFuction(5, 5);
nameOfFuction(10, 10);


function area(a, b) {
  console.log("площадь прямоугольника равна " + a * b);
}
area (10, 15);

//число четное или нечетное
function number(v) {
  if( v % 2 === 0){
    console.log(v + " even");
  }
  else if( v % 2 === 1){
    console.log( v + " odd");
  }
  else{
    console.log( v + " is not a number");
  }
}
number("5")

//countup(5, 10)считает от 5 до 10
// countup(-10, 10) считает щт -10 до 10

function countup(d,t){
  let result = d;
  while(result <= t){
     console.log(result);
    result++;
  }
 
}
countup(5, 10);
countup(-10, 10);

//countdown
function countdown(a, b){
  let result = a;
  while ( result >= b){
    console.log(result);
    result--;

  }
}
countdown(10, 5);
countdown(10, -10);


function count(a, b){
  if (a < b){
    countup(a, b);
  }
  else {
    countdown(a, b);
  }
  console.log(count);
}
count(5, 10);

let names = [ "Aidai", "Bakyt", "Joldosh" ];
for (let i = 0 ; i <= names.length; i++){
  console.log("my name is " + names[i]);
}


for(i = names.length -1; i >= 0; i--){
  console.log("my names is " + names[i]);
 
}