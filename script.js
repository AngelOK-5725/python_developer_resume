document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ✨ ПЕЧАТАЮЩИЙСЯ ТЕКСТ
    // =========================
    const text = "Тамила Хамраева";
    let i = 0;
    const typingEl = document.getElementById("typing");

    function typeEffect() {
        if (!typingEl) return;

        if (i < text.length) {
            typingEl.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 70);
        }
    }

    typeEffect();


    // =========================
    // 🎬 АНИМАЦИЯ СЕКЦИЙ
    // =========================
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


    // =========================
    // 🧲 МАГНИТНЫЕ КАРТОЧКИ
    // =========================
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            card.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) scale(1.03)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translate(0,0) scale(1)";
        });
    });


    // =========================
    // 📩 КНОПКА СВЯЗИ (без ошибок)
    // =========================
    const contactBtn = document.getElementById("contactBtn");

    if (contactBtn) {
        contactBtn.addEventListener("click", () => {
            alert("Связаться со мной: youdo5725@gmail.com или Telegram @Tamila5725");
        });
    }


    // =========================
    // 🌌 ЧАСТИЦЫ (если подключены)
    // =========================
    if (window.tsParticles) {
        tsParticles.load("tsparticles", {
            particles: {
                number: { value: 50 },
                color: { value: "#06b6d4" },
                size: { value: 2 },
                move: { enable: true, speed: 1 }
            }
        });
    }

});
