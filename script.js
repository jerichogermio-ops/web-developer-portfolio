// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu kapag pinindot ang link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Header Shadow habang nag-scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    }else{
        header.style.boxShadow = "none";
    }

});

   // Typing Animation

const text = [
    "Frontend Web Developer",
    "UI Designer",
    "JavaScript Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";

function typing() {

    if (charIndex < text[index].length) {

        currentText += text[index][charIndex];

        document.querySelector(".typing").textContent = currentText;

        charIndex++;

        setTimeout(typing, 100);

    } else {

        setTimeout(() => {

            currentText = "";
            charIndex = 0;

            index++;

            if (index >= text.length) {
                index = 0;
            }

            typing();

        }, 1500);
    }
}

typing();

// Scroll Reveal

const hiddenElements = document.querySelectorAll(".hidden");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => revealObserver.observe(el));
// Dark / Light Mode

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeToggle.textContent = "☀️";
    }else{
        themeToggle.textContent = "🌙";
    }

});
// Loading Screen

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 3000);

});

// Back To Top

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});