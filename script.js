
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const hamburger = document.querySelector(".hamburger");
const navigationMenu = document.querySelector(".menu");
const body = document.querySelector("body");

hamburger.addEventListener('click', activeSlide);

main.onclick = closeSlide;
footer.onclick = closeSlide;

function activeSlide() {
    hamburger.classList.toggle("active");
    navigationMenu.classList.toggle("active");
    fixedBody();
}

function closeSlide() {
    if (navigationMenu.classList.contains("active")) {
        navigationMenu.classList.remove("active");
        hamburger.classList.remove("active");
        fixedBody();
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
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

const nextButton = document.getElementById('carousel_button-next');
nextButton.addEventListener('click', moveToNextSlide)

const previousButton = document.getElementById('carousel_button-previous');
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
        slide.classList.remove('carousel-item__visible-right');
        slide.classList.remove('carousel-item__visible-left');
        slide.classList.remove('carousel-item__hidden-left');
        slide.classList.add('carousel-item__hidden-right');
    }
    slides[slidePosition].classList.add('carousel-item__visible-right');
    slides[slidePosition].classList.remove('carousel-item__hidden-left');
    slides[slidePosition].classList.remove('carousel-item__visible-left');
    slides[slidePosition].classList.remove('carousel-item__hidden-right');    
}

function updateSlidePositionLeft() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item__visible-left');
        slide.classList.remove('carousel-item__visible-right');
        slide.classList.remove('carousel-item__hidden-right');
        slide.classList.add('carousel-item__hidden-left');
    }
    slides[slidePosition].classList.add('carousel-item__visible-left');
    slides[slidePosition].classList.remove('carousel-item__hidden-left');
    slides[slidePosition].classList.remove('carousel-item__visible-right');
    slides[slidePosition].classList.remove('carousel-item__hidden-right');   
}