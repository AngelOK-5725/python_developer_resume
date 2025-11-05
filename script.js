// Анимация появления секций при скролле
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
        });
    },
    { threshold: 0.2 }
);
sections.forEach(section => observer.observe(section));

// Кнопка «Связаться»
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
    alert("Связаться со мной: tamila@example.com или Telegram @TamilaDev");
});
