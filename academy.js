const door1 = document.getElementById("door1");

door1.addEventListener("click", function (e) {

    e.preventDefault();

    door1.classList.add("open");

    setTimeout(() => {

        window.location.href = "a1.html";

    }, 350);

});
