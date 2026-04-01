document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".cta-buttons a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
