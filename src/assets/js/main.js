(function(){

  angular.module("cyc", ["ngMaterial", "ngMdIcons"]);

  var slides = document.getElementsByClassName("slide");
  var carousel = document.getElementById("carousel-wrapper");
  var interval = 3000;
  var currentSlide = slides[0];
  var currentSlideNumber = 0;
  var pause = false;
  var nextBtn = document.getElementById("next");
  var prevBtn = document.getElementById("previous");
  currentSlide.id = "active";

  setCarouselHeight();

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", previous);
  carousel.addEventListener("mouseover", pauseTimer);
  carousel.addEventListener("mouseout", resumeTimer);

  var autoSlider = setInterval(function () {
    if (currentSlideNumber < (slides.length - 1) && !pause){
      next();
    } else if (currentSlideNumber == (slides.length -1) && !pause){
      resetCounter();
    }
  }, interval);

  function pauseTimer(e){
    pause = true;
  }

  function resumeTimer(){
    pause = false;
  }

  function resetCounter() {
    currentSlideNumber = 0;
  }

  function next() {
    if (currentSlideNumber < (slides.length-1)){
      currentSlide.id = "";
      currentSlideNumber ++;
      currentSlide = slides[currentSlideNumber];
      currentSlide.id = "active";
    } else {
      resetCounter();
      next();
    }
  }

  function previous(){
    if (currentSlideNumber !== 0){
      currentSlide.id = "";
      currentSlideNumber --;
      currentSlide = slides[currentSlideNumber];
      currentSlide.id = "active";
    } else {
      currentSlide.id = "";
      currentSlideNumber = (slides.length-1);
      currentSlide = slides[currentSlideNumber];
      currentSlide.id = "active";
    }
  }

  function setCarouselHeight(){
    var slidesArr = [].slice.call(slides);
    setTimeout(function () {
      var maxHeight = slidesArr.reduce(function (max,current,i) {
        if (current.clientHeight > max){
          max = current.clientHeight;
        }
        return max;
      },0)
      carousel.style.height = (maxHeight * 1.1) + "px";
    },1000);
  }

})();
