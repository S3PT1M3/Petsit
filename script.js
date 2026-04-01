  //a-propos
   // Apparition de la section au défilement
  document.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about");
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
      aboutSection.classList.add("visible");
    }
  });
  
    // Apparition des cartes au scroll
  document.addEventListener("scroll", () => {
    document.querySelectorAll(".service-card").forEach(card => {
      const pos = card.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.2;

      if (pos < screenPos) {
        card.classList.add("visible");
      }
    });
  });

  //Réservation
  document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservation-form");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Récupération des données du formulaire
    const name = document.getElementById("name").value.trim();
    const animal = document.getElementById("animal").value;
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;

    if (!name || !animal || !date || !service) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Simuler l'envoi de la réservation
    form.reset();
    confirmationMessage.classList.remove("hidden");

    // Masquer le message après 5 secondes
    setTimeout(() => {
      confirmationMessage.classList.add("hidden");
    }, 5000);
  });
});

   // Scroll vers les sections header
  document.getElementById("cta-btn").addEventListener("click", function() {
    document.getElementById("reservation").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("tarifs-btn").addEventListener("click", function() {
    document.getElementById("tarifs").scrollIntoView({ behavior: "smooth" });
  });

  // Animation après chargement
  window.addEventListener("load", () => {
    document.querySelector(".hero-content").style.opacity = "1";
  });