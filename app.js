const navSlide= () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');//get each nav link by it's own
    
    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
               link.style.animation='';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.7}s`;//delay
            }
        });
        //Burger Animation
    burger.classList.toggle('toggle');
    });
}

    navSlide();

const carouselSlide = document.querySelector('.carousel-slide');    
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons 
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px)' ;

//Button Listeners
nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
carouselSlide.style.transform = 'translateX('+ (size * counter) + 'px)' ;
});


prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+ (size * counter) + 'px)' ;
});

carouselSlide.addEventListener('transitionend', ()=>{
  if(carouselImages[counter].className === 'lastClone'){
       carouselSlide.style.transition = "none";
       counter = carouselImages.length - 2 ;
   carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px)' ;
   }    
});


carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].className === 'firstClone'){
         carouselSlide.style.transition = "none";
         counter = carouselImages.length - counter;
     carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px)' ;
     }    
  });