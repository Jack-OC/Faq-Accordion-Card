const questions = document.querySelectorAll(".accordion-section");
questions[0].setAttribute("aria-expanded", "true");


questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    remover();
    question.children[1].style.display = "block";
    question.setAttribute('aria-expanded', 'true');
    console.log("question");
  });
});

function remover(){
  questions.forEach((question) => {
    question.children[1].style.display = "none";
    question.setAttribute('aria-expanded', 'false');
    console.log("remover", question);
  });
}