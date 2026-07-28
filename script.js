document.addEventListener("DOMContentLoaded", () => {

    const gateScreen = document.querySelector(".gate-screen");
    const openBtn = document.getElementById("openGate");

    openBtn.addEventListener("click", () => {

        openBtn.disabled = true;

        gateScreen.classList.add("open");

        setTimeout(() => {

            window.location.href = "doors.html";

        }, 1500);

    });

});
