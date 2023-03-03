var design = document.querySelector(".design");
var nightmode_btn = document.querySelector("#nightmode");
var lightmode_btn = document.querySelector("#lightmode");

nightmode_btn.addEventListener("click", function () {
    design.setAttribute("href", "web-portofolio2.css");
})

lightmode_btn.addEventListener("click", function () {
    design.setAttribute("href", "web-portfolio.css");
})