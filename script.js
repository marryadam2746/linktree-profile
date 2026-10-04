function toggleTheme() {
    document.body.classList.toggle("dark");

    const button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }
}
