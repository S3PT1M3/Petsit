document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      // Fermer les autres réponses
      document.querySelectorAll(".faq-answer").forEach((ans) => {
        if (ans !== answer) {
          ans.style.maxHeight = null;
          ans.previousElementSibling.classList.remove("active");
        }
      });

      // Toggle la réponse cliquée
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        question.classList.remove("active");
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        question.classList.add("active");
      }
    });
  });
});
