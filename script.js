const questionPool = [
    // EI questions (40 questions, 10 for each type)
    { category: 'EI', question: 'I enjoy being the center of attention.' },
    { category: 'EI', question: 'I prefer working in groups rather than alone.' },
    // ... Add 38 more EI questions

    // SN questions (40 questions, 10 for each type)
    { category: 'SN', question: 'I focus more on the big picture than on details.' },
    { category: 'SN', question: 'I trust my instincts and hunches.' },
    // ... Add 38 more SN questions

    // TF questions (40 questions, 10 for each type)
    { category: 'TF', question: 'I make decisions based on logic rather than emotions.' },
    { category: 'TF', question: 'I value objectivity over personal values when making decisions.' },
    // ... Add 38 more TF questions

    // JP questions (40 questions, 10 for each type)
    { category: 'JP', question: 'I prefer to have a detailed plan rather than be spontaneous.' },
    { category: 'JP', question: 'I like to keep my options open and flexible.' },
    // ... Add 38 more JP questions
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomQuestions() {
    const categories = ['EI', 'SN', 'TF', 'JP'];
    const selectedQuestions = [];

    categories.forEach(category => {
        const categoryQuestions = questionPool.filter(q => q.category === category);
        shuffleArray(categoryQuestions);
        selectedQuestions.push(...categoryQuestions.slice(0, 10));
    });

    shuffleArray(selectedQuestions);
    return selectedQuestions;
}

function createLikertScale(questionIndex) {
    const scale = document.createElement('div');
    scale.className = 'likert-scale';

    const options = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];

    options.forEach((option, i) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${questionIndex}`;
        input.value = i + 1;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        scale.appendChild(label);
    });

    return scale;
}

function displayQuestions() {
    const questions = getRandomQuestions();
    const container = document.getElementById('questions-container');

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        questionDiv.appendChild(createLikertScale(index));
        container.appendChild(questionDiv);
    });
}

function calculateResult() {
    const result = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    const questions = document.querySelectorAll('.question');

    questions.forEach((q, index) => {
        const category = questionPool[index].category;
        const score = parseInt(q.querySelector('input:checked').value);

        if (category === 'EI') {
            result.E += score;
            result.I += 6 - score;
        } else if (category === 'SN') {
            result.S += score;
            result.N += 6 - score;
        } else if (category === 'TF') {
            result.T += score;
            result.F += 6 - score;
        } else if (category === 'JP') {
            result.J += score;
            result.P += 6 - score;
        }
    });

    const type = `${result.E > result.I ? 'E' : 'I'}${result.S > result.N ? 'S' : 'N'}${result.T > result.F ? 'T' : 'F'}${result.J > result.P ? 'J' : 'P'}`;
    const scores = `
        Extraversion (E) / Introversion (I): ${result.E} / ${result.I}
        Sensing (S) / Intuition (N): ${result.S} / ${result.N}
        Thinking (T) / Feeling (F): ${result.T} / ${result.F}
        Judging (J) / Perceiving (P): ${result.J} / ${result.P}
    `;

    return { type, scores };
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuestions();

    document.getElementById('submit-btn').addEventListener('click', () => {
        const { type, scores } = calculateResult();
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `
            <h2>Your MBTI type is: ${type}</h2>
            <pre>${scores}</pre>
            <p class="warning">Please note that this is a generative AI project. All content has been generated by AI and has not undergone professional MBTI fine-tuning. If you require accurate test results and professional interpretations, please seek assistance from official MBTI resources.</p>
        `;
        resultElement.classList.remove('hidden');
    });
});