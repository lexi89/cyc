var slides = document.getElementsByClassName("slide");
var interval = 3000;
var currentSlide = slides[0];
var currentSlideNumber = 0;
var pause = false;
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("previous");

currentSlide.className += " active";

var autoSlider = setInterval(function () {
  if (currentSlideNumber < (slides.length - 1)){
    next();
  } else if (currentSlideNumber == (slides.length -1)){
    resetCounter();
  } else {
    clearInterval(autoSlider);
  }
}, interval);

nextBtn.addEventListener()


function resetCounter() {
  currentSlideNumber = 0;
}

function next() {
  currentSlide.className = "slide";
  currentSlideNumber ++;
  currentSlide = slides[currentSlideNumber];
  currentSlide.className += " active";
}

function previous(){
  currentSlide.className = "slide";
  currentSlideNumber --;
  currentSlide = slides[currentSlideNumber];
  currentSlide.className += " active";
}

function removeActive(){

}
