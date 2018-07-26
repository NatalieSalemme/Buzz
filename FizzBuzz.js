let endText = document.querySelector('.paragraphText');
// let loopText = endText.innerHTML;


let emptyArr = [];
for(let i = 1; i <= 100; i++) {
  emptyArr.push(i);
}
resultArr = [];
for (let i = 1; i < 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    resultArr.push(i + " fizzbuzz");
  } else if(i % 3 === 0) {
    resultArr.push(i + " fizz");
  } else if(i % 5 === 0) {
    resultArr.push(i + " buzz");
  } else {
    resultArr.push(i);
  }
}
endText.innerHTML = resultArr;
