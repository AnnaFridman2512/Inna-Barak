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
