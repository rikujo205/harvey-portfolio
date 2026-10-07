const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const quoteForm = document.querySelector(".quote-form");

quoteForm.addEventListener("submit", event => {
    event.preventDefault();

    alert(
        "Thanks for checking out this portfolio demo! " +
        "This quote form does not submit real information."
    );
});