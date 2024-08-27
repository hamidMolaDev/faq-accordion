const questions = document.querySelectorAll('.question-js');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    question.classList.toggle('active');

    if (question.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
