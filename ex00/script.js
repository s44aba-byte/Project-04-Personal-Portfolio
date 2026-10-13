
// Select the elements we need from the HTML.
const themeButton = document.querySelector("#theme-toggle");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");
const nameInput = document.querySelector("#name");
const currentYear = document.querySelector("#current-year");

// Theme switcher
themeButton.addEventListener("click", function () {
    const isDarkTheme = document.body.classList.toggle("dark-theme");

    themeButton.setAttribute("aria-pressed", String(isDarkTheme));

    themeButton.textContent = isDarkTheme
        ? "Light mode"
        : "Dark mode";
});

// Contact form demonstration
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    formMessage.textContent =
        `Thank you, ${name}! The form works in the browser, ` +
        "but messages are not sent anywhere yet.";
});

// Automatically update the copyright year.
currentYear.textContent = new Date().getFullYear();

