

function nav(){
    const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

var header = document.getElementById("sticky-header");
var sticky = header.offsetTop;

let ul = document.querySelector('.primary-navigation');
let li = document.querySelectorAll('li');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute("data-visible");
  
  if(visibility === "false"){
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if(visibility === "true"){
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
})

window.onscroll = function(){stickyHeader()};
function stickyHeader(){
  if(window.scrollY > sticky){
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

li.forEach(el =>{
  el.addEventListener('click', function(){
    ul.querySelector('.active').classList.remove('active');
    el.classList.add('active');
  })
  
})

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