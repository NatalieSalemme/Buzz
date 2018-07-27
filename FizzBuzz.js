let endText = document.querySelector('.paragraphText');
let fizz = document.querySelector('#fizz');
let buzz = document.querySelector('#buzz');
let fizzbuzz = document.querySelector('#fizzbuzz');
let everything = document.querySelector('#everything');
let allButtons = document.querySelector('.allButtons');


let emptyArr = [];
fizz.addEventListener('click', function() {

  let fizzArr = [];
  for(let j = 0; j <=100; j++) {
    emptyArr.push(j);
  }
for (let i = 1; i < emptyArr.length; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    fizzArr.push(i + " fizzbuzz" + "<br>");
  } else if(i % 3 === 0) {
    fizzArr.push(i + " fizz" + "<br>");
  } else if(i % 5 === 0) {//
    fizzArr.push(i + " buzz" + "<br>");
  } else {
    fizzArr.push(i + "<br>");
  }
}

endText.innerHTML = fizzArr.join('');
console.log(fizzArr);
});
