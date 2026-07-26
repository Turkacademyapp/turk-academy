document.addEventListener("DOMContentLoaded", () => { 
const button = document.querySelector(".start");

button.addEventListener("click", () => {

button.style.transform = "scale(1.03)";

setTimeout(() => {

window.location.href = "doors.html";

}, 1200);

});

