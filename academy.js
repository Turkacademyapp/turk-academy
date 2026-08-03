const door1 = document.getElementById("door1");

door1.addEventListener("click", function (e) {

    e.preventDefault();

    door1.classList.add("open");

    setTimeout(() => {

        window.location.href = "a1.html";

    }, 350);

});
const door2 = document.getElementById("door2");

door2.addEventListener("click", function (e) {

    e.preventDefault();

    door2.classList.add("open");

    setTimeout(() => {

        window.location.href = "a2.html";

    }, 350);

});
