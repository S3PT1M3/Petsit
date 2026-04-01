document.addEventListener("DOMContentLoaded", () => {
  const avisData = [
    {
      nom: "Sophie",
      animal: "Max 🐶",
      texte: "Petsit a pris soin de mon chien comme si c’était le leur. J’ai eu des nouvelles tous les jours, je recommande vivement !",
      avatar: "https://i.pravatar.cc/150?img=1",
      stars: 5
    },
    {
      nom: "Julien",
      animal: "Moka 🐱",
      texte: "Mon chat a été chouchouté pendant mes vacances. Service professionnel et chaleureux !",
      avatar: "https://i.pravatar.cc/150?img=2",
      stars: 4
    },
    {
      nom: "Claire",
      animal: "Cookie 🐰",
      texte: "Équipe très sérieuse et passionnée, mon lapin était entre de bonnes mains. Merci Petsit !",
      avatar: "https://i.pravatar.cc/150?img=3",
      stars: 5
    },
    {
      nom: "David",
      animal: "Rocky 🐕",
      texte: "Une équipe de confiance, mon chien était heureux et détendu à mon retour. Super expérience !",
      avatar: "https://i.pravatar.cc/150?img=4",
      stars: 5
    }
  ];

  const slider = document.getElementById("avis-slider");

  // Générer les cartes dynamiquement
  avisData.forEach(avis => {
    const card = document.createElement("div");
    card.classList.add("avis-card");

    card.innerHTML = `
      <div class="avis-avatar">
        <img src="${avis.avatar}" alt="${avis.nom}">
        <div>
          <div class="avis-name">${avis.nom}</div>
          <div class="avis-animal">Propriétaire de ${avis.animal}</div>
        </div>
      </div>
      <div class="avis-stars">${"⭐".repeat(avis.stars)}</div>
      <p class="avis-text">« ${avis.texte} »</p>
    `;

    slider.appendChild(card);
  });

  // Navigation
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -320, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 320, behavior: "smooth" });
  });
});
