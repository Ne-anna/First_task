
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

const nextBtn = document.getElementById('carousel_button-next');
nextBtn.addEventListener('click', moveToNextSlide)

const prevBtn = document.getElementById('carousel_button-previous');
prevBtn.addEventListener('click', moveToPrevSlide);

function moveToNextSlide() {
    if(slidePosition === totalSlides-1){
        slidePosition = 0;
    }else {
        slidePosition++;
    }
    updateSlidePositionRight();
 }

function moveToPrevSlide(){
    if(slidePosition === 0){
        slidePosition = totalSlides - 1;
    }else {
        slidePosition--;
    }
    updateSlidePositionLeft();
}

function updateSlidePositionRight() {
    for(let slide of slides) {
        slide.classList.remove('carousel-item__visible-right');
        slide.classList.remove('carousel-item__visible-left');
        slide.classList.add('carousel-item__hidden-right');
    }
    slides[slidePosition].classList.remove('carousel-item__start');
    slides[slidePosition].classList.add('carousel-item__visible-right');
    slides[slidePosition].classList.remove('carousel-item__hidden-left');
    slides[slidePosition].classList.remove('carousel-item__visible-left'); //noņem visible left
    slides[slidePosition].classList.remove('carousel-item__hidden-right'); //esošajam slaidam nepiešķir hidden   
}

function updateSlidePositionLeft() {
    for(let slide of slides) {
        slide.classList.remove('carousel-item__visible-left');
        slide.classList.remove('carousel-item__visible-right');
        slide.classList.add('carousel-item__hidden-left');
    }
    slides[slidePosition].classList.add('carousel-item__visible-left');
    slides[slidePosition].classList.remove('carousel-item__start');
    slides[slidePosition].classList.remove('carousel-item__hidden-left');
    slides[slidePosition].classList.remove('carousel-item__visible-right'); //esošajam nepiešķir visible right
    slides[slidePosition].classList.remove('carousel-item__hidden-right'); //esošajam slaidam nepiešķir hidden   
}