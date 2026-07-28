document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector("#openGate");

button.addEventListener("click", () => {

    document.body.classList.add("entering");

    setTimeout(() => {
        window.location.href = "doors.html";
    }, 700);

});

});
