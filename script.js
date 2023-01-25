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

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

const slidesContainer2 = document.getElementById("slider_cinema2");
const slide2 = document.querySelector(".slide");
const prevButton2 = document.getElementById("slider_cinema2_arrow_left");
const nextButton2 = document.getElementById("slider_cinema2_arrow_right");

prevButton2.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer2.scrollLeft -= slideWidth;
});

nextButton2.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer2.scrollLeft += slideWidth;
});
