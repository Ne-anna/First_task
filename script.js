
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const hamburger = document.querySelector(".navigation__hamburger");
const navigationMenu = document.querySelector(".navigation__menu");
const body = document.querySelector("body");
const cart = document.querySelector('.navigation__cart');
const addToCart = document.querySelector('.cart');
const nextNavigationButton = document.querySelector('.navigation__button--features');
const backNavigationButton = document.querySelector('.sub-navigation__button--back');
const backNavigationWord = document.querySelector('.sub-navigation__text--back');
const subMenu = document.querySelector('.sub-navigation');

hamburger.addEventListener('click', activeSlide);
cart.addEventListener('click', openCart);

function activeSlide() {
    if (subMenu.classList.contains("active")) {
        closeAll();
    } else {
    hamburger.classList.toggle("active");
    navigationMenu.classList.toggle("active");
    addToCart.classList.remove("active");
    fixedBody();
    }
}

function closeAll() {
    hamburger.classList.remove("active");
    navigationMenu.classList.remove("active");
    subMenu.classList.remove("active");
    body.classList.remove("fixed-body");
}

function openCart() {
    addToCart.classList.toggle("active");
    navigationMenu.classList.remove("active");
    hamburger.classList.remove("active");
    body.classList.remove("fixed-body");
    subMenu.classList.remove("active");
}

function fixedBody() {
    if (navigationMenu.classList.contains("active")) {
        body.classList.add("fixed-body");
    } else {
        body.classList.remove("fixed-body");
    }
}

main.onclick = () => {
    hamburger.classList.remove("active");
    navigationMenu.classList.remove("active");
    addToCart.classList.remove("active");
    body.classList.remove("fixed-body");
    subMenu.classList.remove("active");
}
 
footer.onclick = () => {
     hamburger.classList.remove("active");
     navigationMenu.classList.remove("active");
     addToCart.classList.remove("active");
     body.classList.remove("fixed-body");
}

nextNavigationButton.onclick = () => {
    fixedBody();
    subMenu.classList.add("active");
    navigationMenu.classList.remove("active");
}

backNavigationButton.onclick = () => {
    fixedBody();
    navigationMenu.classList.add("active");
    subMenu.classList.remove("active");
}

backNavigationWord.onclick = () => {
    navigationMenu.classList.add("active");
    subMenu.classList.remove("active");
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