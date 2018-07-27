let fizz = document.querySelector('#fizz');
let buzz = document.querySelector('#buzz');
let fizzbuzz = document.querySelector('#fizzbuzz');
let items = document.querySelectorAll('li');

fizz.addEventListener('click', function() {
  for(let i = 0; i <= items.length; i++) {
    if(i % 3 === 2) {
      items[i].classList.add("blueText");
      items[i].innerHTML = "Fizz";
    }
  }
}, false);

buzz.addEventListener('click', function() {
  for(let j = 0; j <= items.length; j++) {
    if(j % 5 === 4) {
      items[j].classList.add("redText");
      items[j].innerHTML = "Buzz";
    }
  }
}, false);

fizzbuzz.addEventListener('click', function() {
  for(let k = 0; k <= items.length; k++) {
    if(k % 5 === 4 && k% 3 === 2) {
      items[k].classList.add("orangeText");
      items[k].innerHTML = "Fizzbuzz";
    }
  }
}, false);
