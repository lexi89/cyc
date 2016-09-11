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


// COULDNT FIND THE HEIGHT OF SHIT BEFORE IT'S LOADED.
  setTimeout(function () {
    var height = slides[2].clientHeight;

    console.log(height);
  },1000);

  var slidesArr = [].slice.call(slides);


  var maxHeight = slidesArr.reduce(function(max, current, i){

    // var height = .clientHeight;
    if (current.clientHeight > max){
      max = current;
    }
    return max;
  }, 0);

  console.log(maxHeight);

  currentSlide.id = "active";
  adjustContainer();


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

  function adjustContainer(){
    var currentSlideHeight = document.getElementById("active").clientHeight;
    carousel.style.height = (currentSlideHeight*1.2) + "px";
  }

  function next() {
    if (currentSlideNumber < (slides.length-1)){
      currentSlide.id = "";
      currentSlideNumber ++;
      currentSlide = slides[currentSlideNumber];
      currentSlide.id = "active";
      adjustContainer();
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
      adjustContainer();
    } else {
      currentSlide.id = "";
      currentSlideNumber = (slides.length-1);
      currentSlide = slides[currentSlideNumber];
      currentSlide.id = "active";
      adjustContainer();
    }

  }

})();
