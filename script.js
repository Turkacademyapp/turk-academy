document.addEventListener("DOMContentLoaded", () => { 

const button = document.querySelector(".start");

button.addEventListener("click", () => {

    button.style.transform = "scale(1.03)";

    setTimeout(() => {

        window.location.href = "doors.html";

    }, 1200);

});


// =====================
// فتح البوابة
// =====================

const openBtn = document.querySelector(".open-btn");
const leftDoor = document.getElementById("leftDoor");
const rightDoor = document.getElementById("rightDoor");


if(openBtn){

    openBtn.addEventListener("click", () => {

        leftDoor.style.transform = "translateX(-100%)";

        rightDoor.style.transform = "translateX(100%)";

    });

}

});
