// loader
setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
}, 500);


// Task One:
// Humburger Menu ==>

const humburger = document.querySelector(".humburger");
const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");

humburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
});








// Progress Bar ==>
