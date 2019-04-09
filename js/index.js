// Your code goes here

// mouseover and mouseout

const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseover', function(event){
    let target = event.target;
    target.style.color = 'green';

    target.onmouseout = function(event) {
        target.style.color = "";
    }
});

// keydown and keyup

const introChange = document.querySelector('body');

window.addEventListener('keydown', function(event) {
    introChange.style.background = 'yellow';
    

     window.addEventListener ('keyup', function(event) {
         introChange.style.background = "";
     });
});


//scroll

const nav = document.querySelector('.main-navigation');

 window.addEventListener('scroll', function(event) {
     nav.style.background = 'pink';

});


// dblclick

const double = document.querySelector('.intro img');

window.addEventListener('dblclick', function(event) {
    double.style.border = '3px dotted red';
});


