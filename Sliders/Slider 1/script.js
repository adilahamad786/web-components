const slides = document.querySelectorAll(".slide");
let flag = 0;
slides[flag].style.opacity = "100%";

function controller(num) {
    flag += num;

    if (flag < 0)
        flag = slides.length-1;
    else if (flag > slides.length-1)
        flag = 0;

    slides.forEach(slide => slide.style.opacity = "0%")
    slides[flag].style.opacity = "100%";
}