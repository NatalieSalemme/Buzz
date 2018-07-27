let endText = document.querySelector('.paragraphText');
let fizz = document.querySelector('#fizz');
let buzz = document.querySelector('#buzz');
let fizzbuzz = document.querySelector('#fizzbuzz');
let everything = document.querySelector('#everything');
let allButtons = document.querySelector('.allButtons');
let fizzText = document.querySelector('.fizzText');
let buzzText = document.querySelector('.buzzText');
let fizzBuzzText = document.querySelector('.fizzBuzzText');
let everythingText = document.querySelector('.everythingText');


fizz.addEventListener('click', function listing() {

  let d = document;
  let main = d.getElementsByTagName('main')[ 0 ];
  let ul = d.createElement( 'ul' );
  let i;
  main.appendChild( ul );
  for( i = 1; i < 100; i = i + 1 ){
    var li = d.createElement( 'li' );
    if(i % 3 ===0) {
      li.textContent = " fizz";
      li.style.fontSize = "25px";
      li.style.color = "red";
      ul.appendChild( li );
    } else{
      li.textContent = i;
      ul.appendChild(li);

    }
  }
});
