for(let number = 1; number <= 100; number++) {
  if (number % 5 === 0 && number % 3 === 0) {
    console.log("FizzBuzz");
  }
  else if (number % 3 === 0) {
    console.log("Fizz");
  } 
  else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}