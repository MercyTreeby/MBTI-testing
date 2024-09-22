console.log('Script starting...');

// Make sure questionPool is defined at the top of the file
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
    { category: 'EI', question: 'I find it easy to approach and talk to people I don\'t know well.' },
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

    // TF questions (40 questions)
    { category: 'TF', question: 'I make decisions based on logic rather than emotions.' },
    { category: 'TF', question: 'I value objectivity over personal values when making decisions.' },
    { category: 'TF', question: 'I prefer to analyze problems rationally rather than considering how they affect people.' },
    { category: 'TF', question: 'I tend to prioritize efficiency over harmony in group settings.' },
    { category: 'TF', question: 'I find it easy to give constructive criticism without considering others\' feelings.' },
    { category: 'TF', question: 'I believe that the truth is more important than being tactful.' },
    { category: 'TF', question: 'I prefer to make decisions based on facts rather than personal experiences.' },
    { category: 'TF', question: 'I tend to remain calm and objective in emotional situations.' },
    { category: 'TF', question: 'I value justice and fairness over mercy and compassion.' },
    { category: 'TF', question: 'I find it easy to separate my personal feelings from a situation.' },
    { category: 'TF', question: 'I prefer to focus on tasks and goals rather than on people\'s feelings.' },
    { category: 'TF', question: 'I tend to trust reason and logic more than intuition and gut feelings.' },
    { category: 'TF', question: 'I find it more important to be right than to be liked.' },
    { category: 'TF', question: 'I prefer to analyze situations objectively rather than empathize with others.' },
    { category: 'TF', question: 'I tend to prioritize competence over social harmony in work environments.' },
    { category: 'TF', question: 'I find it easy to make tough decisions without letting emotions interfere.' },
    { category: 'TF', question: 'I prefer to solve problems through logical analysis rather than considering people\'s feelings.' },
    { category: 'TF', question: 'I tend to value intellectual discussions over emotional connections.' },
    { category: 'TF', question: 'I find it more important to be honest than to spare someone\'s feelings.' },
    { category: 'TF', question: 'I prefer to base my decisions on principles rather than on individual circumstances.' },
    { category: 'TF', question: 'I tend to prioritize achieving goals over maintaining harmony in a group.' },
    { category: 'TF', question: 'I find it easy to critique ideas without considering how it might affect others.' },
    { category: 'TF', question: 'I prefer to focus on facts and data rather than on people\'s emotions when making decisions.' },
    { category: 'TF', question: 'I tend to value clarity and directness over diplomacy and tact.' },
    { category: 'TF', question: 'I find it more important to be objective than to be compassionate.' },
    { category: 'TF', question: 'I prefer to analyze problems systematically rather than considering their impact on people.' },
    { category: 'TF', question: 'I tend to prioritize logic over emotions when resolving conflicts.' },
    { category: 'TF', question: 'I find it easy to make decisions based on what\'s fair rather than what makes people happy.' },
    { category: 'TF', question: 'I prefer to focus on the task at hand rather than on building relationships.' },
    { category: 'TF', question: 'I tend to value expertise and competence more than social skills.' },
    { category: 'TF', question: 'I find it more important to be truthful than to maintain harmony.' },
    { category: 'TF', question: 'I prefer to approach problems with a logical mindset rather than an empathetic one.' },
    { category: 'TF', question: 'I tend to prioritize efficiency over people\'s feelings in work situations.' },
    { category: 'TF', question: 'I find it easy to make objective judgments without being influenced by emotions.' },
    { category: 'TF', question: 'I prefer to focus on the pros and cons rather than on how decisions affect people.' },
    { category: 'TF', question: 'I tend to value rational thinking over emotional intelligence.' },
    { category: 'TF', question: 'I find it more important to be fair than to be liked by others.' },
    { category: 'TF', question: 'I prefer to make decisions based on logical analysis rather than personal values.' },
    { category: 'TF', question: 'I tend to prioritize achieving results over maintaining group harmony.' },

    // JP questions (40 questions)
    { category: 'JP', question: 'I prefer to have a detailed plan rather than be spontaneous.' },
    { category: 'JP', question: 'I like to keep my options open and flexible.' },
    { category: 'JP', question: 'I feel more comfortable when my schedule is structured.' },
    { category: 'JP', question: 'I enjoy adapting to new situations on the fly.' },
    { category: 'JP', question: 'I prefer to complete one project before starting another.' },
    { category: 'JP', question: 'I tend to start projects without much planning.' },
    { category: 'JP', question: 'I like to have clear goals and deadlines.' },
    { category: 'JP', question: 'I prefer to go with the flow rather than stick to a plan.' },
    { category: 'JP', question: 'I feel stressed when things are left open-ended.' },
    { category: 'JP', question: 'I enjoy the excitement of last-minute pressure.' },
    { category: 'JP', question: 'I prefer to have my work finished well before deadlines.' },
    { category: 'JP', question: 'I tend to procrastinate and work in bursts of energy.' },
    { category: 'JP', question: 'I like to make lists and use a planner regularly.' },
    { category: 'JP', question: 'I prefer to be spontaneous in my daily activities.' },
    { category: 'JP', question: 'I feel more productive in a structured environment.' },
    { category: 'JP', question: 'I enjoy the freedom of a flexible schedule.' },
    { category: 'JP', question: 'I prefer to have closure on decisions rather than leaving options open.' },
    { category: 'JP', question: 'I like to explore various possibilities before making a decision.' },
    { category: 'JP', question: 'I tend to be punctual and expect others to be on time.' },
    { category: 'JP', question: 'I am comfortable with changing plans at the last minute.' },
    { category: 'JP', question: 'I prefer to have a set routine for my daily tasks.' },
    { category: 'JP', question: 'I enjoy tackling new projects without much preparation.' },
    { category: 'JP', question: 'I like to have my living and working spaces well-organized.' },
    { category: 'JP', question: 'I tend to be comfortable with a certain level of chaos or clutter.' },
    { category: 'JP', question: 'I prefer to make decisions quickly and move on.' },
    { category: 'JP', question: 'I like to keep my options open as long as possible.' },
    { category: 'JP', question: 'I feel satisfied when I complete tasks ahead of schedule.' },
    { category: 'JP', question: 'I tend to work in bursts of inspiration rather than following a schedule.' },
    { category: 'JP', question: 'I prefer to have a clear plan for my future.' },
    { category: 'JP', question: 'I enjoy taking life as it comes without much long-term planning.' },
    { category: 'JP', question: 'I like to have closure on one task before moving to the next.' },
    { category: 'JP', question: 'I enjoy multitasking and working on several projects simultaneously.' },
    { category: 'JP', question: 'I prefer to follow established procedures and guidelines.' },
    { category: 'JP', question: 'I enjoy finding new and unconventional ways to do things.' },
    { category: 'JP', question: 'I feel more comfortable when decisions are final.' },
    { category: 'JP', question: 'I like to leave room for last-minute changes and adjustments.' },
    { category: 'JP', question: 'I prefer to have a structured approach to problem-solving.' },
    { category: 'JP', question: 'I enjoy brainstorming and exploring multiple solutions without committing.' },
    { category: 'JP', question: 'I like to have my weekends planned in advance.' },
    { category: 'JP', question: 'I prefer to decide on weekend activities spontaneously.' }
];

console.log('Question pool size:', questionPool.length);

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

function displayQuestions() {
    console.log('displayQuestions called');
    const questions = getRandomQuestions();
    console.log('Random questions:', questions);
    const container = document.getElementById('questions-container');

    if (!container) {
        console.error('Questions container not found!');
        return;
    }

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        questionDiv.appendChild(createLikertScale(index));
        container.appendChild(questionDiv);
    });
    console.log('Questions displayed');
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

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    try {
        displayQuestions();
    } catch (error) {
        console.error('Error in displayQuestions:', error);
    }

    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const { type, scores } = calculateResult();
            const resultElement = document.getElementById('result');
            if (resultElement) {
                resultElement.innerHTML = `
                    <h2>Your MBTI type is: ${type}</h2>
                    <pre>${scores}</pre>
                    <p class="warning">Please note that this is a generative AI project. All content has been generated by AI and has not undergone professional MBTI fine-tuning. If you require accurate test results and professional interpretations, please seek assistance from official MBTI resources.</p>
                `;
                resultElement.classList.remove('hidden');
            } else {
                console.error('Result element not found!');
            }
        });
    } else {
        console.error('Submit button not found!');
    }
});

function calculateResult() {
    const scores = {
        EI: 0,
        SN: 0,
        TF: 0,
        JP: 0
    };

    const questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        const category = questionPool[index].category;
        const selectedValue = parseInt(question.querySelector('input:checked')?.value || '0');
        
        if (selectedValue === 0) {
            console.warn(`No answer selected for question ${index + 1}`);
            return;
        }

        // Adjust the score based on the category and selected value
        switch (category) {
            case 'EI':
                scores.EI += selectedValue - 3;
                break;
            case 'SN':
                scores.SN += selectedValue - 3;
                break;
            case 'TF':
                scores.TF += 3 - selectedValue;
                break;
            case 'JP':
                scores.JP += 3 - selectedValue;
                break;
        }
    });

    const type = [
        scores.EI > 0 ? 'E' : 'I',
        scores.SN > 0 ? 'S' : 'N',
        scores.TF > 0 ? 'T' : 'F',
        scores.JP > 0 ? 'J' : 'P'
    ].join('');

    const scoreDetails = Object.entries(scores).map(([key, value]) => {
        const total = 20; // 10 questions per category, max score difference is 2 per question
        const percentage = Math.round((value + total) / (2 * total) * 100);
        const left = key[0];
        const right = key[1];
        return `${left} ${percentage}% - ${100 - percentage}% ${right}`;
    }).join('\n');

    return {
        type,
        scores: scoreDetails
    };
}

console.log('Script loaded');