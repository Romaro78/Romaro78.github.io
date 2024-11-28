document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Scroll-to-top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '⬆';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Animated typing effect
    function typeText(element, text, delay = 100) {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
            } else {
                clearInterval(interval);
            }
        }, delay);
    }

    const typingElement = document.querySelector("#home h1 span");
    if (typingElement) {
        typeText(typingElement, "SMART.R Solutions", 150);
    }

    // Skill bar animations on scroll
    const skillBars = document.querySelectorAll(".progress span");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                bar.style.transition = "width 2s ease-in-out";
                bar.style.width = bar.getAttribute("data-skill") || "100%";
            }
        });
    });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });

    // Contact form submission
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        form.reset();
    });

    // Portfolio hover animations
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease-in-out";
        });
        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });
});
