const carousel = document.querySelector(".container");

const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");

var showCarousel = 0;

arrowLeft.addEventListener("click", function() {
    showCarousel = (showCarousel > 0) ? showCarousel - 1 : 0;
    carousel.style.transform = "translate(" + (showCarousel) * -20 + "%)";

});

arrowRight.addEventListener("click", function() {
    showCarousel = (showCarousel < 4) ? showCarousel + 1 : 4;
    carousel.style.transform = "translate(" + (showCarousel) * -20 + "%)";

});