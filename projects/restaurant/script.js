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

const reservationForm = document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert(
        "Thanks for checking out this demo! " +
        "This reservation form is for portfolio purposes."
    );
});