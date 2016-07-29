//Fizz Buzz

for(var i =1; i<101;i++){
  if(i%15===0){
  console.log("FizzBuzz");
  }
  else if (i%5===0){
  console.log("Fizz")
  }
  else if (i%3===0){
  console.log("Buzz")
  }
  else {
    console.log(i);
  }
}

//Chess Board

var board = "";

for(var i = 0;i<8;i++ ){
  for(var j =0;j<8;j++){
    if((i+j)%2 ===0){
      board +=" ";
    }
    else {
      board +="#";
      }
  }
}
