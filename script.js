// public/js/script.js

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'];
    const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    let allAnswered = true;

    answers.forEach(answer => {
        const selectedOption = document.querySelector(`input[name="${answer}"]:checked`);
        if (selectedOption) {
            scores[selectedOption.value]++;
        } else {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        document.getElementById('result').textContent = 'Please answer all the questions.';
        return;
    }

    let result = '';
    const maxScore = Math.max(scores.A, scores.B, scores.C, scores.D, scores.E);

    if (maxScore === scores.A) {
        result = 'You are likely a Leader.';
    } else if (maxScore === scores.B) {
        result = 'You are likely a Technical (Developer).';
    } else if (maxScore === scores.C) {
        result = 'You are likely a Technical (Designer).';
    } else if (maxScore === scores.D) {
        result = 'You are likely an Ideator.';
    } else if (maxScore === scores.E) {
        result = 'You are likely the Best Presenter (Pitch).';
    }

    document.getElementById('result').textContent = result;
});
