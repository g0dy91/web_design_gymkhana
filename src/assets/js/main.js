

function nav(){

var header = document.getElementById("sticky-header");
var sticky = header.offsetTop;

let ul = document.querySelector('.primary-navigation');
let li = document.querySelectorAll('li');

window.onscroll = function(){stickyHeader()};
function stickyHeader(){
  if(window.scrollY > sticky){
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

new WOW().init();


    
//====== counter up 
var cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append: " ",
});
cu.start();


var pageLink = document.querySelectorAll('.page-scroll');
    
pageLink.forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            offsetTop: 1 - 60,
        });
    });
});
}