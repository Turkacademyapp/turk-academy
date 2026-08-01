document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector("#openGate");

button.addEventListener("click", () => {

    document.body.classList.add("entering");

    setTimeout(() => {
        window.location.href = "doors.html";
    }, 700);

});

});
const languageBtn = document.querySelector("#languageBtn");
const languageMenu = document.querySelector("#languageMenu");

languageBtn.addEventListener("click",()=>{

    languageMenu.style.display =
    languageMenu.style.display === "flex"
    ? "none"
    : "flex";

});
