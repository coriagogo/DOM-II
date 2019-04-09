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


// click & stretch task & stopPropagation
const content = document.querySelector('.content-pick');

content.addEventListener('click', function(event) {
    const btnMove = document.querySelector('.btn');

    btnMove.addEventListener('click', function(eventObject){
        TweenMax.to(".btn", 1, {x: 35, ease: Bounce.easeOut});
            event.stopPropagation();
    });
});


// wheel 

const moveWheel = document.querySelector('.content-destination');

window.addEventListener('wheel', function(event) {
    moveWheel.style.border = '2px dashed pink';
});

// focus

const focusOn = document.querySelector('.destination');

window.addEventListener('focus', function(event) {
    focusOn.style.color = 'orange';
});

// load 

const onLoad = document.querySelector('.content-section');

window.addEventListener('load', function(event) {
    onLoad.style.border = "1px solid black";
    
});

// prevent default and stopPropagation

const stopRefresh = document.querySelector('.nav a');

stopRefresh.addEventListener('click', function(event) {
    event.preventDefault();
    
});