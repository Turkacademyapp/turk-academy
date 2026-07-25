document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector(".start");

button.addEventListener("click", () => {

button.innerHTML = "✨ جاري فتح البوابة...";

button.style.transform="scale(1.08)";

button.style.boxShadow="0 0 40px gold";

setTimeout(()=>{

window.location.href="doors.html";

},1200);

});

});
