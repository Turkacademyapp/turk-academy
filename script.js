const button = document.getElementById("openDoor");

const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");
const light = document.querySelector(".door-light");

button.addEventListener("click", () => {

    leftDoor.style.transform = "rotateY(-105deg)";

    rightDoor.style.transform = "rotateY(105deg)";

    light.style.opacity = "1";

    button.innerHTML = "جاري الدخول...";

    setTimeout(() => {

        alert("مرحبًا بك في Türk Academy by Maya");

        // لاحقًا سننتقل إلى صفحة الأبواب
        // window.location.href = "academy.html";

    },1800);

});
