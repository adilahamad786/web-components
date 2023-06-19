const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let flag = 0;
slides[flag].style.opacity = "100%";
prevBtn.setAttribute("disabled", true)

function controller(num) {
    flag += num;

    if (flag === 0) {
        prevBtn.setAttribute("disabled", true)
        nextBtn.removeAttribute("disabled")
    }
    else if (flag === slides.length-1) {
        prevBtn.removeAttribute("disabled")
        nextBtn.setAttribute("disabled", true)
    }
    else {
        prevBtn.removeAttribute("disabled")
        nextBtn.removeAttribute("disabled")
    }
        
    slides.forEach(slide => slide.style.opacity = "0%")
    slides[flag].style.opacity = "100%";
}