let endText = document.querySelector('.paragraphText');
let fizz = document.querySelector('#fizz');
let buzz = document.querySelector('#buzz');
let fizzbuzz = document.querySelector('#fizzbuzz');
let everything = document.querySelector('#everything');
let allButtons = document.querySelector('.allButtons');
let buzzText = document.querySelector('.buzzText');
let fizzBuzzText = document.querySelector('.fizzBuzzText');
let everythingText = document.querySelector('.everythingText');
//
fizz.addEventListener('click', function() {
  let emptyFizzArr = [];
  let fizzArr = [];
  for(let j = 0; j <=100; j++) {
    emptyFizzArr.push(j);
  }
  for (let i = 1; i < emptyFizzArr.length; i++) {
  if(i % 3 === 0) {
    fizzArr.push(i + " fizz" + "<br>");
  }  else {
    fizzArr.push(i + "<br>");
  }
  }
endText.innerHTML = fizzArr.join('');
console.log(fizzArr);
});



  buzz.addEventListener('click', function() {
    let emptyBuzzArr = [];
    let buzzArr = [];
    for(let k = 0; k <=100; k++) {
      emptyBuzzArr.push(k);
      console.log(k);
    }
  for (let m = 1; m < emptyBuzzArr.length; m++) {
    if(m % 5 === 0) {
      buzzArr.push(m + " buzz" + "<br>");
    } else {
      buzzArr.push(m + "<br>");
    }
  }
  console.log(buzzText.innerHTML = buzzArr.join(''));
});



fizzbuzz.addEventListener('click', function() {
  let emptyFizzBuzzArr = [];
  let fizzBuzzArr = [];
  for(let n = 0; n <=100; n++) {
    emptyFizzBuzzArr.push(n);
    console.log(n);
  }
for (let o = 1; o < emptyFizzBuzzArr.length; o++) {
  if(o % 3 === 0 && o % 5 === 0) {
    fizzBuzzArr.push(o + " fizzbuzz" + "<br>");
  } else {
    fizzBuzzArr.push(o + "<br>");
  }
}
fizzBuzzText.innerHTML = fizzBuzzArr.join('');
});


  everything.addEventListener('click', function() {
    let emptyEverythingArr = [];
    let everythingArr = [];
    for(let p = 0; p <=100; p++) {
      emptyEverythingArr.push(p);
      console.log(emptyEverythingArr);
    }
  for (let q = 1; q < emptyEverythingArr.length; q++) {
    if(q % 3 === 0 && q % 5 === 0) {
      everythingArr.push(q + " fizzbuzz" + "<br>");
    } else if(q % 3 === 0) {
      everythingArr.push(q + " fizz" + "<br>");
    } else if(q % 5 === 0) {
      everythingArr.push(q + " buzz" + "<br>");
    } else {
      everythingArr.push(q + "<br>");
    }
  }
    console.log(everythingText.innerHTML = everythingArr.join(''));
});
