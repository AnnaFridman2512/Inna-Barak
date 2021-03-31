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


  
const carouselSlide2 = document.querySelector('.carousel-slide2');    
const carouselImages2 = document.querySelectorAll('.carousel-slide2 img');

//Buttons2 
const prevBtn2 = document.querySelector('.prevBtn2');
const nextBtn2 = document.querySelector('.nextBtn2');

//Counter2
let counter2 = 1;
const size2 = carouselImages2[0].clientWidth;
carouselSlide2.style.transform = 'translateX(' + (size2 * counter2) + 'px)' ;

//Button Listeners2
nextBtn2.addEventListener('click', () => {
    if(counter2 >= carouselImages2.length -1) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2++;
carouselSlide2.style.transform = 'translateX('+ (size2 * counter2) + 'px)' ;
});


prevBtn2.addEventListener('click', () => {
    if(counter2 <= 0) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2--;
    carouselSlide2.style.transform = 'translateX('+ (size2 * counter2) + 'px)' ;
});

carouselSlide2.addEventListener('transitionend', ()=>{
  if(carouselImages2[counter2].className === 'lastClone2'){
       carouselSlide2.style.transition = "none";
       counter2 = carouselImages2.length - 2 ;
   carouselSlide2.style.transform = 'translateX(' + (size2 * counter2) + 'px)' ;
   }    
});


carouselSlide2.addEventListener('transitionend', ()=>{
    if(carouselImages2[counter2].className === 'firstClone2'){
         carouselSlide2.style.transition = "none";
         counter2 = carouselImages2.length - counter2;
     carouselSlide2.style.transform = 'translateX(' + (size2 * counter2) + 'px)' ;
     }    
  });



const carouselSlide3 = document.querySelector('.carousel-slide3');    
const carouselImages3 = document.querySelectorAll('.carousel-slide3 img');

//Buttons3 
const prevBtn3 = document.querySelector('.prevBtn3');
const nextBtn3 = document.querySelector('.nextBtn3');

//Counter3
let counter3 = 1;
const size3 = carouselImages3[0].clientWidth;
carouselSlide3.style.transform = 'translateX(' + (size3 * counter3) + 'px)' ;

//Button Listeners3
nextBtn3.addEventListener('click', () => {
    if(counter3 >= carouselImages3.length -1) return;
    carouselSlide3.style.transition = "transform 0.4s ease-in-out";
    counter3++;
carouselSlide3.style.transform = 'translateX('+ (size3 * counter3) + 'px)' ;
});


prevBtn3.addEventListener('click', () => {
    if(counter3 <= 0) return;
    carouselSlide3.style.transition = "transform 0.4s ease-in-out";
    counter3--;
    carouselSlide3.style.transform = 'translateX('+ (size3 * counter3) + 'px)' ;
});

carouselSlide3.addEventListener('transitionend', ()=>{
  if(carouselImages3[counter3].className === 'lastClone3'){
       carouselSlide3.style.transition = "none";
       counter3 = carouselImages3.length - 2 ;
   carouselSlide3.style.transform = 'translateX(' + (size3 * counter3) + 'px)' ;
   }    
});


carouselSlide3.addEventListener('transitionend', ()=>{
    if(carouselImages3[counter3].className === 'firstClone3'){
         carouselSlide3.style.transition = "none";
         counter3 = carouselImages3.length - counter3;
     carouselSlide3.style.transform = 'translateX(' + (size3 * counter3) + 'px)' ;
     }    
  });


const carouselSlide4 = document.querySelector('.carousel-slide4');    
const carouselImages4 = document.querySelectorAll('.carousel-slide4 img');

//Buttons4
const prevBtn4 = document.querySelector('.prevBtn4');
const nextBtn4 = document.querySelector('.nextBtn4');

//Counter
let counter4 = 1;
const size4 = carouselImages4[0].clientWidth;
carouselSlide4.style.transform = 'translateX(' + (size4 * counter4) + 'px)' ;

//Button Listeners4
nextBtn4.addEventListener('click', () => {
    if(counter4 >= carouselImages4.length -1) return;
    carouselSlide4.style.transition = "transform 0.4s ease-in-out";
    counter4++;
carouselSlide4.style.transform = 'translateX('+ (size4 * counter4) + 'px)' ;
});


prevBtn4.addEventListener('click', () => {
    if(counter4 <= 0) return;
    carouselSlide4.style.transition = "transform 0.4s ease-in-out";
    counter4--;
    carouselSlide4.style.transform = 'translateX('+ (size4 * counter4) + 'px)' ;
});

carouselSlide4.addEventListener('transitionend', ()=>{
  if(carouselImages4[counter4].className === 'lastClone4'){
       carouselSlide4.style.transition = "none";
       counter4 = carouselImages4.length - 2 ;
   carouselSlide4.style.transform = 'translateX(' + (size4 * counter4) + 'px)' ;
   }    
});


carouselSlide4.addEventListener('transitionend', ()=>{
    if(carouselImages4[counter4].className === 'firstClone4'){
         carouselSlide4.style.transition = "none";
         counter4 = carouselImages4.length - counter4;
     carouselSlide4.style.transform = 'translateX(' + (size4 * counter4) + 'px)' ;
     }    
  });