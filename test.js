const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const imageSlide = document.querySelector(".image-slider-test img");

leftBtn.addEventListener("click", () => {
    imageSlide.className = " left";
});

rightBtn.addEventListener("click", () => {
    imageSlide.className = " right";
});

 
