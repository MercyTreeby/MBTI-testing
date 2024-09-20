const questionPool = [
    // EI questions (40 questions)
    { category: 'EI', question: 'I enjoy being the center of attention.' },
    { category: 'EI', question: 'I prefer working in groups rather than alone.' },
    { category: 'EI', question: 'I feel energized after spending time with a large group of people.' },
    { category: 'EI', question: 'I tend to think out loud rather than keeping my thoughts to myself.' },
    { category: 'EI', question: 'I am often described as outgoing and sociable.' },
    { category: 'EI', question: 'I prefer to have many acquaintances rather than a few close friends.' },
    { category: 'EI', question: 'I find it easy to start conversations with strangers.' },
    { category: 'EI', question: 'I enjoy public speaking and giving presentations.' },
    { category: 'EI', question: 'I am more productive when working in a team environment.' },
    { category: 'EI', question: 'I prefer attending large social gatherings over small, intimate get-togethers.' },
    { category: 'EI', question: 'I feel comfortable expressing my opinions in group discussions.' },
    { category: 'EI', question: 'I tend to act first and think later.' },
    { category: 'EI', question: 'I enjoy being in busy, stimulating environments.' },
    { category: 'EI', question: 'I prefer to communicate face-to-face rather than through text or email.' },
    { category: 'EI', question: 'I find it energizing to meet new people.' },
    { category: 'EI', question: 'I am often the one to initiate social activities.' },
    { category: 'EI', question: 'I feel comfortable jumping into new situations without much preparation.' },
    { category: 'EI', question: 'I prefer to work on multiple projects simultaneously rather than focusing on one task at a time.' },
    { category: 'EI', question: 'I enjoy being the life of the party.' },
    { category: 'EI', question: 'I find it easy to share my personal experiences with others.' },
    { category: 'EI', question: 'I prefer collaborative brainstorming sessions over individual problem-solving.' },
    { category: 'EI', question: 'I feel energized by engaging in debates or discussions.' },
    { category: 'EI', question: 'I am more likely to make decisions based on group consensus rather than individual reflection.' },
    { category: 'EI', question: 'I prefer open-plan offices to private workspaces.' },
    { category: 'EI', question: 'I find it easy to express my emotions to others.' },
    { category: 'EI', question: 'I enjoy networking events and making new professional connections.' },
    { category: 'EI', question: 'I prefer team sports over individual sports or activities.' },
    { category: 'EI', question: 'I feel most productive when I can bounce ideas off others.' },
    { category: 'EI', question: 'I am comfortable taking the lead in group situations.' },
    { category: 'EI', question: 'I prefer to solve problems by talking them through with others.' },
    { category: 'EI', question: 'I find it easy to adapt to new social situations.' },
    { category: 'EI', question: 'I enjoy being in the spotlight.' },
    { category: 'EI', question: 'I prefer jobs that involve frequent interaction with people.' },
    { category: 'EI', question: 'I feel energized after attending social events.' },
    { category: 'EI', question: 'I am more likely to share my thoughts and ideas openly rather than keep them to myself.' },
    { category: 'EI', question: 'I prefer learning in group settings rather than studying alone.' },
    { category: 'EI', question: 'I find it easy to approach and talk to people I don't know well.' },
    { category: 'EI', question: 'I enjoy participating in group discussions and debates.' },
    { category: 'EI', question: 'I prefer to celebrate achievements with others rather than by myself.' },
    { category: 'EI', question: 'I feel most like myself when I am around other people.' },

    // SN questions (40 questions)
    { category: 'SN', question: 'I focus more on the big picture than on details.' },
    { category: 'SN', question: 'I trust my instincts and hunches.' },
    { category: 'SN', question: 'I prefer to learn through concepts and theories rather than concrete facts.' },
    { category: 'SN', question: 'I enjoy imagining future possibilities more than focusing on the present reality.' },
    { category: 'SN', question: 'I often notice patterns and connections that others might miss.' },
    { category: 'SN', question: 'I prefer to describe things in a figurative or metaphorical way.' },
    { category: 'SN', question: 'I am more interested in novel ideas than in practical applications.' },
    { category: 'SN', question: 'I often think about the deeper meaning or significance of things.' },
    { category: 'SN', question: 'I prefer to focus on the overall structure rather than specific details.' },
    { category: 'SN', question: 'I enjoy thinking about abstract concepts and theories.' },
    { category: 'SN', question: 'I often see multiple possibilities or interpretations in a situation.' },
    { category: 'SN', question: 'I prefer to learn through exploring ideas rather than through hands-on experience.' },
    { category: 'SN', question: 'I am more interested in potential outcomes than in immediate results.' },
    { category: 'SN', question: 'I often find myself daydreaming or lost in thought.' },
    { category: 'SN', question: 'I prefer to focus on the big picture rather than getting bogged down in details.' },
    { category: 'SN', question: 'I enjoy coming up with new ideas and possibilities.' },
    { category: 'SN', question: 'I am more interested in what could be rather than what is.' },
    { category: 'SN', question: 'I prefer to work on projects that involve imagination and creativity.' },
    { category: 'SN', question: 'I often see connections between seemingly unrelated things.' },
    { category: 'SN', question: 'I prefer to focus on the future rather than the present or past.' },
    { category: 'SN', question: 'I enjoy solving complex, abstract problems.' },
    { category: 'SN', question: 'I am more interested in the theory behind something than its practical application.' },
    { category: 'SN', question: 'I often think about how things could be improved or changed.' },
    { category: 'SN', question: 'I prefer to focus on the overall meaning rather than specific facts.' },
    { category: 'SN', question: 'I enjoy exploring new ideas and possibilities, even if they seem impractical.' },
    { category: 'SN', question: 'I often find myself thinking about the future and what it might bring.' },
    { category: 'SN', question: 'I prefer to focus on the potential of a situation rather than its current reality.' },
    { category: 'SN', question: 'I enjoy discussing abstract or theoretical concepts.' },
    { category: 'SN', question: 'I often see innovative ways to do things differently.' },
    { category: 'SN', question: 'I prefer to focus on the underlying principles rather than specific examples.' },
    { category: 'SN', question: 'I am more interested in exploring possibilities than following established methods.' },
    { category: 'SN', question: 'I often think about how different ideas or concepts are related.' },
    { category: 'SN', question: 'I prefer to focus on the overall pattern rather than individual elements.' },
    { category: 'SN', question: 'I enjoy coming up with creative solutions to problems.' },
    { category: 'SN', question: 'I am more interested in exploring new ideas than sticking to tried-and-true methods.' },
    { category: 'SN', question: 'I often find myself thinking about the deeper implications of things.' },
    { category: 'SN', question: 'I prefer to focus on the general concept rather than specific details.' },
    { category: 'SN', question: 'I enjoy thinking about hypothetical scenarios and what-if situations.' },
    { category: 'SN', question: 'I am more interested in innovation than in maintaining traditional approaches.' },

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