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


languageBtn.addEventListener("click", (e)=>{

    e.stopPropagation();

    languageMenu.style.display =
    languageMenu.style.display === "flex"
    ? "none"
    : "flex";

});



document.addEventListener("click",(e)=>{

    if(
        !languageMenu.contains(e.target) &&
        !languageBtn.contains(e.target)
    ){

        languageMenu.style.display="none";

    }

});
const settingsBtn = document.querySelector("#settingsBtn");
const settingsMenu = document.querySelector("#settingsMenu");


settingsBtn.addEventListener("click", (e)=>{

    e.stopPropagation();

    settingsMenu.style.display =
    settingsMenu.style.display === "flex"
    ? "none"
    : "flex";

});


document.addEventListener("click",(e)=>{

    if(
        !settingsMenu.contains(e.target) &&
        !settingsBtn.contains(e.target)
    ){

        settingsMenu.style.display="none";

    }

});

function checkOrientation() {

    const rotateMessage = document.getElementById("rotateMessage");

    if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {

        rotateMessage.style.display = "flex";

    } else {

        rotateMessage.style.display = "none";

    }

}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
