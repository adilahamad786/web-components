// Select all slides
const slides = document.querySelectorAll(".slide");

// Transform images x-axis
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

// Select buttons
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

// Slide counter
let counter = 0;

// Disable previous button bydefault
prevBtn.setAttribute("disabled", true);

// Controller function
function controller() {
    if (counter === 0) {
        prevBtn.setAttribute("disabled", true);
        nextBtn.removeAttribute("disabled");
    }
    else if (counter === slides.length-1) {
        prevBtn.removeAttribute("disabled");
        nextBtn.setAttribute("disabled", true);
    }
    else {
        prevBtn.removeAttribute("disabled");
        nextBtn.removeAttribute("disabled");
    }
        
    slides.forEach(slide => slide.style.transform = `translateX(-${counter * 100}%)`);

    // // Another way to do same thing
    // const slider = document.querySelector(".slider");
    // slider.style.transform = `translateX(-${counter * 100}%)`
}

// Go to next slide
function next() {
    counter++;
    controller();
}

// Go to previous slide
function prev() {
    counter--;
    controller();
}