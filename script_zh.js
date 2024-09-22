console.log('繁體中文腳本啟動...');

// 定義繁體中文的問題池
const questionPoolZh = [
    { category: 'EI', question: '我喜歡成為注意的焦點。' },
    { category: 'EI', question: '我更喜歡在團體中工作而不是獨自一人。' },
    { category: 'EI', question: '我在與一大群人相處後感到充滿活力。' },
    { category: 'EI', question: '我傾向於先說出來再思考，而不是將想法藏在心裡。' },
    { category: 'EI', question: '人們常常形容我為外向和社交。' },
    { category: 'EI', question: '我更喜歡有許多熟人而不是幾個密友。' },
    { category: 'EI', question: '我覺得很容易與陌生人開始對話。' },
    { category: 'EI', question: '我喜歡公開演講和做報告。' },
    { category: 'EI', question: '我在團隊環境中工作時更具生產力。' },
    { category: 'EI', question: '我更喜歡參加大型社交聚會，而不是小型親密的聚會。' },
    { category: 'EI', question: '我在小組討論中表達自己的意見感到舒適。' },
    { category: 'EI', question: '我傾向於先行動再思考。' },
    { category: 'EI', question: '我喜歡身處繁忙、刺激的環境中。' },
    { category: 'EI', question: '我更喜歡面對面交流，而不是通過文本或電子郵件。' },
    { category: 'EI', question: '我覺得認識新朋友讓我充滿活力。' },
    { category: 'EI', question: '我經常是發起社交活動的人。' },
    { category: 'EI', question: '我在沒有太多準備的情況下進入新情境感到自在。' },
    { category: 'EI', question: '我更喜歡同時處理多個項目，而不是一次專注於一項任務。' },
    { category: 'EI', question: '我喜歡成為派對的核心人物。' },
    { category: 'EI', question: '我覺得與他人分享我的個人經歷很容易。' },
    { category: 'EI', question: '我更喜歡集體頭腦風暴會議，而不是個別解決問題。' },
    { category: 'EI', question: '我通過參與辯論或討論感到充滿活力。' },
    { category: 'EI', question: '我更傾向於基於群體共識做決定，而不是個人反思。' },
    { category: 'EI', question: '我更喜歡開放式辦公室，而不是私密的工作空間。' },
    { category: 'EI', question: '我覺得很容易向他人表達我的情感。' },
    { category: 'EI', question: '我喜歡參加聯誼活動並建立新的專業聯繫。' },
    { category: 'EI', question: '我更喜歡團隊運動，而不是個人運動或活動。' },
    { category: 'EI', question: '當我能與他人交流想法時，我感到最有生產力。' },
    { category: 'EI', question: '我在小組情境中擔任領導角色感到自在。' },
    { category: 'EI', question: '我更喜歡通過與他人交談來解決問題。' },
    { category: 'EI', question: '我覺得很容易適應新的社交情境。' },
    { category: 'EI', question: '我喜歡在聚光燈下。' },
    { category: 'EI', question: '我更喜歡涉及與人頻繁互動的工作。' },
    { category: 'EI', question: '我在參加社交活動後感到充滿活力。' },
    { category: 'EI', question: '我更可能公開分享我的想法和意見，而不是將其隱藏。' },
    { category: 'EI', question: '我更喜歡在小組環境中學習，而不是獨自學習。' },
    { category: 'EI', question: '我覺得很容易接近和與我不熟悉的人交談。' },
    { category: 'EI', question: '我喜歡參加小組討論和辯論。' },
    { category: 'EI', question: '我更喜歡與他人一起慶祝成就，而不是自己慶祝。' },
    { category: 'EI', question: '我在其他人身邊時最能表現出自己。' },

    // SN questions (40 questions)
    { category: 'SN', question: '我更專注於大局而非細節。' },
    { category: 'SN', question: '我相信自己的直覺和靈感。' },
    { category: 'SN', question: '我更喜歡通過概念和理論學習，而不是具體的事實。' },
    { category: 'SN', question: '我喜歡想像未來的可能性，而不是專注於當前的現實。' },
    { category: 'SN', question: '我經常注意到別人可能忽視的模式和聯繫。' },
    { category: 'SN', question: '我更喜歡以比喻或象徵的方式描述事物。' },
    { category: 'SN', question: '我對新穎的想法更感興趣，而不是實際的應用。' },
    { category: 'SN', question: '我經常思考事物的更深層意義或重要性。' },
    { category: 'SN', question: '我更喜歡關注整體結構而不是具體細節。' },
    { category: 'SN', question: '我喜歡思考抽象的概念和理論。' },
    { category: 'SN', question: '我經常在一種情況中看到多種可能性或解釋。' },
    { category: 'SN', question: '我更喜歡通過探索想法來學習，而不是通過實踐經驗。' },
    { category: 'SN', question: '我對潛在的結果更感興趣，而不是即時的結果。' },
    { category: 'SN', question: '我經常發現自己在做白日夢或沉思。' },
    { category: 'SN', question: '我更喜歡專注於大局，而不是陷入細節中。' },
    { category: 'SN', question: '我喜歡提出新的想法和可能性。' },
    { category: 'SN', question: '我對未來可能發生的事情更感興趣，而不是現實狀況。' },
    { category: 'SN', question: '我更喜歡參與需要想像力和創造力的項目。' },
    { category: 'SN', question: '我經常看到看似不相關事物之間的聯繫。' },
    { category: 'SN', question: '我更喜歡專注於未來，而不是當前或過去。' },
    { category: 'SN', question: '我喜歡解決複雜的抽象問題。' },
    { category: 'SN', question: '我對事物背後的理論比其實際應用更感興趣。' },
    { category: 'SN', question: '我經常思考事物如何改進或變化。' },
    { category: 'SN', question: '我更喜歡專注於整體意義，而不是具體事實。' },
    { category: 'SN', question: '我喜歡探索新的想法和可能性，即使它們看起來不切實際。' },
    { category: 'SN', question: '我經常發現自己在思考未來及其可能帶來的事情。' },
    { category: 'SN', question: '我更喜歡專注於一種情況的潛力，而不是其當前現實。' },
    { category: 'SN', question: '我喜歡討論抽象或理論概念。' },
    { category: 'SN', question: '我經常看到創新的方法來以不同的方式做事。' },
    { category: 'SN', question: '我更喜歡專注於潛在原則，而不是具體例子。' },
    { category: 'SN', question: '我對探索可能性更感興趣，而不是遵循既定的方法。' },
    { category: 'SN', question: '我經常思考不同想法或概念之間的關聯。' },
    { category: 'SN', question: '我更喜歡專注於整體模式，而不是單個元素。' },
    { category: 'SN', question: '我喜歡提出創造性的解決方案來解決問題。' },
    { category: 'SN', question: '我對探索新想法更感興趣，而不是堅持傳統的方法。' },
    { category: 'SN', question: '我經常發現自己在思考事物的更深層意涵。' },
    { category: 'SN', question: '我更喜歡專注於一般概念，而不是具體細節。' },
    { category: 'SN', question: '我喜歡思考假設情境和如果這樣的情況。' },
    { category: 'SN', question: '我對創新比維持傳統方法更感興趣。' },

    // TF questions (40 questions)
    { category: 'TF', question: '我根據邏輯而非情感做出決策。' },
    { category: 'TF', question: '我在做決策時重視客觀性而非個人價值觀。' },
    { category: 'TF', question: '我更喜歡理性地分析問題，而不是考慮它們對人們的影響。' },
    { category: 'TF', question: '我傾向於在小組環境中優先考慮效而非和諧。' },
    { category: 'TF', question: '我覺得很容易給出建設性的批評，而不考慮他人的感受。' },
    { category: 'TF', question: '我相信真相比技巧更重要。' },
    { category: 'TF', question: '我更喜歡根據事實而非個人經歷做出決策。' },
    { category: 'TF', question: '我傾向於在情感情況中保持冷靜和客觀。' },
    { category: 'TF', question: '我重視正義和公平而非仁慈和同情。' },
    { category: 'TF', question: '我覺得很容易將個人感受與情況分開。' },
    { category: 'TF', question: '我更喜歡專注於任務和目標，而不是人們的感受。' },
    { category: 'TF', question: '我傾向於更信任理性和邏輯，而非直覺和本能感覺。' },
    { category: 'TF', question: '我覺得對我來說，正確比受人喜歡更重要。' },
    { category: 'TF', question: '我更喜歡客觀地分析情況，而不是與他人同感。' },
    { category: 'TF', question: '我傾向於在工作環境中優先考慮能力而非社交和諧。' },
    { category: 'TF', question: '我覺得很容易在不讓情感干擾的情況下做出艱難的決策。' },
    { category: 'TF', question: '我更喜歡通過邏輯分析來解決問題，而不是考慮人們的感受。' },
    { category: 'TF', question: '我傾向於重視智力討論而非情感聯繫。' },
    { category: 'TF', question: '我覺得誠實比顧及他人的感受更重要。' },
    { category: 'TF', question: '我更喜歡根據原則而非個別情況做出決策。' },
    { category: 'TF', question: '我傾向於優先考慮實現目標，而非維持團體的和諧。' },
    { category: 'TF', question: '我覺得很容易批評想法，而不考慮這會對他人產生什麼影響。' },
    { category: 'TF', question: '我更喜歡在做決策時專注於事實和數據，而不是人們的情感。' },
    { category: 'TF', question: '我傾向於重視清晰和直接，而非外交和技巧。' },
    { category: 'TF', question: '我覺得客觀性比同情心更重要。' },
    { category: 'TF', question: '我更喜歡系統地分析問題，而不是考慮它們對人們的影響。' },
    { category: 'TF', question: '我傾向於在解決衝突時優先考慮邏輯而非情感。' },
    { category: 'TF', question: '我覺得很容易根據公正而非讓人高興做出決策。' },
    { category: 'TF', question: '我更喜歡專注於當前的任務，而不是建立關係。' },
    { category: 'TF', question: '我傾向於重視專業知識和能力，而非社交技巧。' },
    { category: 'TF', question: '我覺得誠實比維持和諧更重要。' },
    { category: 'TF', question: '我更喜歡以邏輯思維來處理問題，而非同情心。' },
    { category: 'TF', question: '我傾向於在工作情況中優先考慮效率，而非人們的感受。' },
    { category: 'TF', question: '我覺得很容易做出客觀判斷，而不受情感影響。' },
    { category: 'TF', question: '我更喜歡專注於利弊，而不是決策對人們的影響。' },
    { category: 'TF', question: '我傾向於重視理性思考，而非情感智力。' },
    { category: 'TF', question: '我覺得公平比受他人喜歡更重要。' },
    { category: 'TF', question: '我更喜歡根據邏輯分析做出決策，而非個人價值觀。' },
    { category: 'TF', question: '我傾向於優先考慮取得結果，而非維持團隊和諧。' },

    // JP questions (40 questions)
    { category: 'JP', question: '我更喜歡有詳細的計劃，而不是隨性而為。' },
    { category: 'JP', question: '我喜歡保持選擇的開放性和靈活性。' },
    { category: 'JP', question: '當我的日程有條理時，我感覺更舒適。' },
    { category: 'JP', question: '我喜歡隨機應變，適應新情況。' },
    { category: 'JP', question: '我更喜歡在開始另一個項目之前完成一個項目。' },
    { category: 'JP', question: '我傾向於在沒有太多計劃的情況下開始項目。' },
    { category: 'JP', question: '我喜歡有明確的目標和截止日期。' },
    { category: 'JP', question: '我更喜歡隨波逐流，而不是堅持計劃。' },
    { category: 'JP', question: '當事情保持開放性時，我感到壓力。' },
    { category: 'JP', question: '我喜歡最後一刻的壓力帶來的刺激。' },
    { category: 'JP', question: '我更喜歡在截止日期之前提前完成工作。' },
    { category: 'JP', question: '我傾向於拖延，並在精力爆發時工作。' },
    { category: 'JP', question: '我喜歡定期列清單和使用計劃器。' },
    { category: 'JP', question: '我更喜歡在日常活動中隨性而為。' },
    { category: 'JP', question: '在有結構的環境中，我感覺更有生產力。' },
    { category: 'JP', question: '我喜歡靈活日程帶來的自由。' },
    { category: 'JP', question: '我更喜歡對決策有明確的結論，而不是留下選擇的空間。' },
    { category: 'JP', question: '我喜歡在做決策之前探索各種可能性。' },
    { category: 'JP', question: '我傾向於準時，並期待他人也能準時。' },
    { category: 'JP', question: '我對於在最後一刻改變計劃感到自在。' },
    { category: 'JP', question: '我更喜歡為日常任務制定固定的例行程序。' },
    { category: 'JP', question: '我喜歡在沒有太多準備的情況下處理新項目。' },
    { category: 'JP', question: '我喜歡我的生活和工作空間井然有序。' },
    { category: 'JP', question: '我對一定程度的混亂或雜亂感到舒適。' },
    { category: 'JP', question: '我更喜歡快速做出決策，然後繼續前進。' },
    { category: 'JP', question: '我喜歡儘可能長時間保持選擇的開放性。' },
    { category: 'JP', question: '當我提前完成任務時，我感到滿足。' },
    { category: 'JP', question: '我傾向於在靈感爆發時工作，而不是遵循計劃。' },
    { category: 'JP', question: '我更喜歡對未來有明確的計劃。' },
    { category: 'JP', question: '我喜歡隨著生活的變化，而不需要太多長期計劃。' },
    { category: 'JP', question: '我喜歡在轉向下一項目之前對一項任務有結論。' },
    { category: 'JP', question: '我喜歡多任務處理，同時處理幾個項目。' },
    { category: 'JP', question: '我更喜歡遵循既定的程序和指導方針。' },
    { category: 'JP', question: '我喜歡找到新穎且非傳統的做事方式。' },
    { category: 'JP', question: '當決策是最終的時候，我感覺更自在。' },
    { category: 'JP', question: '我喜歡為最後一刻的變更和調整留出空間。' },
    { category: 'JP', question: '我更喜歡對問題解決採取結構化的方法。' },
    { category: 'JP', question: '我喜歡集思廣益，探索多種解決方案而不做承諾。' },
    { category: 'JP', question: '我喜歡提前計劃我的周末活動。' },
    { category: 'JP', question: '我更喜歡隨性地決定周末活動。' },
];

console.log('問題池大小:', questionPoolZh.length);

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
        const categoryQuestions = questionPoolZh.filter(q => q.category === category);
        shuffleArray(categoryQuestions);
        selectedQuestions.push(...categoryQuestions.slice(0, 10));
    });

    shuffleArray(selectedQuestions);
    return selectedQuestions;
}

function displayQuestions() {
    console.log('displayQuestions 被調用');
    const questions = getRandomQuestions();
    console.log('隨機問題:', questions);
    const container = document.getElementById('questions-container');

    if (!container) {
        console.error('問題容器未找到！');
        return;
    }

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.dataset.category = q.category; // 儲存類別
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        questionDiv.appendChild(createLikertScale(index));
        container.appendChild(questionDiv);
    });
    console.log('問題已顯示');
}

function createLikertScale(questionIndex) {
    const scale = document.createElement('div');
    scale.className = 'likert-scale';

    const options = ['強烈反對', '反對', '中立', '同意', '強烈同意'];

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
    console.log('DOM 完全加載');
    try {
        displayQuestions();
    } catch (error) {
        console.error('displayQuestions 中的錯誤:', error);
    }

    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const { type, scores } = calculateResult();
            const resultElement = document.getElementById('result');
            if (resultElement) {
                resultElement.innerHTML = `
                    <h2>你的 MBTI 人格類型是: ${type}</h2>
                    <pre>${scores}</pre>
                    <p class="warning">請注意，這是一個生成式人工智慧專案。所有內容均由 AI 生成，並未經過專業的 MBTI 調整。如果您需要準確的測試結果和專業解讀，請尋求官方 MBTI 資源的協助。</p>
                `;
                resultElement.classList.remove('hidden');
            } else {
                console.error('結果元素未找到！');
            }
        });
    } else {
        console.error('提交按鈕未找到！');
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
    questions.forEach((question) => {
        const category = question.dataset.category;
        const selectedValue = parseInt(question.querySelector('input:checked')?.value || '0');
        
        if (selectedValue === 0) {
            console.warn(`沒有為問題選擇答案`);
            return;
        }

        // 根據類別和選擇的值調整分數
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
        const total = 20; // 每個類別10個問題，最大分數差為每個問題2分
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

console.log('腳本加載完成');