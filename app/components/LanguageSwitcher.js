const languageQuestions = {
    en: [
        { category: 'EI', question: 'I enjoy being the center of attention.' },
        { category: 'EI', question: 'I prefer working in groups rather than alone.' },
        // 添加更多英文問題...
    ],
    zh: [
        { category: 'EI', question: '我喜歡成為注意的中心。' },
        { category: 'EI', question: '我更喜歡在團體中工作，而不是獨自一人。' },
        { category: 'EI', question: '我在與一大群人相處後感到精力充沛。' },
        { category: 'EI', question: '我傾向於大聲思考，而不是將我的想法保留給自己。' },
        { category: 'EI', question: '我經常被描述為外向和社交。' },
        { category: 'EI', question: '我更喜歡有許多熟人，而不是幾個親密的朋友。' },
        { category: 'EI', question: '我覺得與陌生人開始對話很容易。' },
        { category: 'EI', question: '我喜歡公開演講和做演示。' },
        { category: 'EI', question: '我在團隊環境中工作時更有效率。' },
        { category: 'EI', question: '我更喜歡參加大型社交聚會，而不是小型的親密聚會。' },
        // 添加更多繁體中文問題...
    ]
};

function loadQuestions(language) {
    const questions = languageQuestions[language] || languageQuestions['en']; // 默認為英文
    displayQuestions(questions);
}