
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const hamburger = document.querySelector(".navigation__hamburger");
const navigationMenu = document.querySelector(".navigation__menu");
const body = document.querySelector("body");
const cart = document.querySelector('.navigation__cart');
const addToCart = document.querySelector('.cart');

hamburger.addEventListener('click', activeSlide);

main.onclick = () => {
   hamburger.classList.remove("active");
   navigationMenu.classList.remove("active");
   addToCart.classList.remove("active");
}

footer.onclick = closeSlide;

cart.addEventListener('click', openCart);

function activeSlide() {
    hamburger.classList.toggle("active");
    navigationMenu.classList.toggle("active");
    addToCart.classList.remove("active");
    fixedBody();
}

function closeSlide() {
    if (navigationMenu.classList.contains("active")) {
        navigationMenu.classList.remove("active");
        hamburger.classList.remove("active");
        fixedBody();
    }
}

function openCart() {
    addToCart.classList.toggle("active");
    navigationMenu.classList.remove("active");
    hamburger.classList.remove("active");
}

function closeCart() {
    if(addToCart.classList.contains("active")) {
        addToCart.classList.remove("active");
    }
}

function fixedBody() {
    if (navigationMenu.classList.contains("active")) {
        body.classList.add("fixed-body");
    } else {
        body.classList.remove("fixed-body");
    }
}
let slidePosition = 2;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

const nextButton = document.getElementById('carousel__button--next');
nextButton.addEventListener('click', moveToNextSlide)

const previousButton = document.getElementById('carousel__button--previous');
previousButton.addEventListener('click', moveToPrevSlide);

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePositionRight();
 }

function moveToPrevSlide() {
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePositionLeft();
}

function updateSlidePositionRight() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible-right');
        slide.classList.remove('carousel__item--visible-left');
        slide.classList.remove('carousel__item--hidden-left');
        slide.classList.add('carousel__item--hidden-right');
    }
    slides[slidePosition].classList.add('carousel__item--visible-right');
    slides[slidePosition].classList.remove('carousel__item--hidden-left');
    slides[slidePosition].classList.remove('carousel__item--visible-left');
    slides[slidePosition].classList.remove('carousel__item--hidden-right');    
}

function updateSlidePositionLeft() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible-left');
        slide.classList.remove('carousel__item--visible-right');
        slide.classList.remove('carousel__item--hidden-right');
        slide.classList.add('carousel__item--hidden-left');
    }
    slides[slidePosition].classList.add('carousel__item--visible-left');
    slides[slidePosition].classList.remove('carousel__item--hidden-left');
    slides[slidePosition].classList.remove('carousel__item--visible-right');
    slides[slidePosition].classList.remove('carousel__item--hidden-right');   
}