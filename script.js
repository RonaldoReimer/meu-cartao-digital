const cards = document.querySelectorAll(".link-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.3s";

    });

});

/* CONSOLE MESSAGE */

console.log("Site carregado com sucesso 🚀");
