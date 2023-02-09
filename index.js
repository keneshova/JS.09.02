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


