document.addEventListener("DOMContentLoaded", () => {
    // Typing Animation
    const text = "Fullstack Developer | Frontend & Backend";
    let i = 0;
    const speed = 100;
    const typedText = document.getElementById("typed-text");

    function type() {
        if (i < text.length) {
            typedText.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();

    // Sidebar Toggle
    document.querySelector(".fa-bars").addEventListener("click", () => {
        document.querySelector(".nav-screen").style.right = "0";
    });

    document.querySelector(".fa-times").addEventListener("click", () => {
        document.querySelector(".nav-screen").style.right = "-285px";
    });

    // Skill Bar Animation
    const skillbars = document.querySelectorAll(".skillbar");
    skillbars.forEach((bar) => {
        bar.style.width = "0";
        window.addEventListener("scroll", () => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                bar.querySelector(".skillbar-bar").style.width = bar.dataset.percent;
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Message Sent! Thank you for reaching out.");
    });
});