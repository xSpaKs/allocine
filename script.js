const burger = document.querySelector(".Burger");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    nav.classList.toggle("open");
});

const slidesContainer = document.getElementById("slider_cinema");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slider_cinema_arrow_left");
const nextButton = document.getElementById("slider_cinema_arrow_right");

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});

nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});
