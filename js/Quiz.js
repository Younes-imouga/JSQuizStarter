let Quizzes = {
    // general: [
    //     { 
    //         question: "What is the capital of France?", 
    //         answer1: "Paris", 
    //         answer2: "Lyon", 
    //         answer3: "Marseille", 
    //         correctAnswers: ["Paris"] 
    //     },
    //     { 
    //         question: "Which ocean is the largest?", 
    //         answer1: "Pacific", 
    //         answer2: "Atlantic", 
    //         answer3: "Indian", 
    //         correctAnswers: ["Pacific"] 
    //     },
    //     { 
    //         question: "How many days are there in a leap year?", 
    //         answer1: "365", 
    //         answer2: "366", 
    //         answer3: "364", 
    //         correctAnswers: ["366"] 
    //     },
    //     { 
    //         question: "Which language has the most native speakers?", 
    //         answer1: "English", 
    //         answer2: "Mandarin Chinese", 
    //         answer3: "Spanish", 
    //         correctAnswers: ["Mandarin Chinese"] 
    //     },
    //     { 
    //         question: "What currency is used in Japan?", 
    //         answer1: "Yen", 
    //         answer2: "Won", 
    //         answer3: "Yuan", 
    //         correctAnswers: ["Yen"] 
    //     },
    //     { 
    //         question: "Which continent is Egypt in?", 
    //         answer1: "Asia", 
    //         answer2: "Africa", 
    //         answer3: "Europe", 
    //         correctAnswers: ["Africa"] 
    //     },
    //     { 
    //         question: "What is H2O commonly known as?", 
    //         answer1: "Salt", 
    //         answer2: "Water", 
    //         answer3: "Hydrogen", 
    //         correctAnswers: ["Water"] 
    //     },
    //     { 
    //         question: "Which planet is known as the Red Planet?", 
    //         answer1: "Mars", 
    //         answer2: "Jupiter", 
    //         answer3: "Venus", 
    //         correctAnswers: ["Mars"] 
    //     },
    //     { 
    //         question: "Which of the following are European countries?", 
    //         answer1: "France", 
    //         answer2: "Brazil", 
    //         answer3: "Germany", 
    //         correctAnswers: ["France", "Germany"] 
    //     },
    //     { 
    //         question: "Which instrument has keys, pedals, and strings?", 
    //         answer1: "Piano", 
    //         answer2: "Violin", 
    //         answer3: "Flute", 
    //         correctAnswers: ["Piano"] 
    //     }
    // ],
    // science: [
    //     { 
    //         question: "What gas do plants primarily absorb for photosynthesis?", 
    //         answer1: "Oxygen", 
    //         answer2: "Carbon dioxide", 
    //         answer3: "Nitrogen", 
    //         correctAnswers: ["Carbon dioxide"] 
    //     },
    //     { 
    //         question: "What is the chemical symbol for gold?", 
    //         answer1: "Ag", 
    //         answer2: "Au", 
    //         answer3: "Gd", 
    //         correctAnswers: ["Au"] 
    //     },
    //     { 
    //         question: "How many bones are in the adult human body?", 
    //         answer1: "206", 
    //         answer2: "205", 
    //         answer3: "210", 
    //         correctAnswers: ["206"] 
    //     },
    //     { 
    //         question: "What part of the cell contains genetic material?", 
    //         answer1: "Mitochondria", 
    //         answer2: "Nucleus", 
    //         answer3: "Ribosome", 
    //         correctAnswers: ["Nucleus"] 
    //     },
    //     { 
    //         question: "What force keeps planets in orbit around the sun?", 
    //         answer1: "Magnetism", 
    //         answer2: "Friction", 
    //         answer3: "Gravity", 
    //         correctAnswers: ["Gravity"] 
    //     },
    //     { 
    //         question: "What is the boiling point of water at sea level?", 
    //         answer1: "100°C", 
    //         answer2: "90°C", 
    //         answer3: "80°C", 
    //         correctAnswers: ["100°C"] 
    //     },
    //     { 
    //         question: "Which vitamin is produced when skin is exposed to sunlight?", 
    //         answer1: "Vitamin C", 
    //         answer2: "Vitamin D", 
    //         answer3: "Vitamin B12", 
    //         correctAnswers: ["Vitamin D"] 
    //     },
    //     { 
    //         question: "Which of the following are noble gases?", 
    //         answer1: "Helium", 
    //         answer2: "Oxygen", 
    //         answer3: "Neon", 
    //         correctAnswers: ["Helium", "Neon"] 
    //     },
    //     { 
    //         question: "Which particle has a negative charge?", 
    //         answer1: "Proton", 
    //         answer2: "Neutron", 
    //         answer3: "Electron", 
    //         correctAnswers: ["Electron"] 
    //     },
    //     { 
    //         question: "What is the most abundant gas in Earth's atmosphere?", 
    //         answer1: "Oxygen", 
    //         answer2: "Nitrogen", 
    //         answer3: "Carbon dioxide", 
    //         correctAnswers: ["Nitrogen"] 
    //     }
    // ],
    // history: [
    //     { 
    //         question: "Who was the first President of the United States?", 
    //         answer1: "George Washington", 
    //         answer2: "Abraham Lincoln", 
    //         answer3: "Thomas Jefferson", 
    //         correctAnswers: ["George Washington"] 
    //     },
    //     { 
    //         question: "In which year did World War II end?", 
    //         answer1: "1945", 
    //         answer2: "1944", 
    //         answer3: "1939", 
    //         correctAnswers: ["1945"] 
    //     },
    //     { 
    //         question: "Which ancient civilization built the pyramids at Giza?", 
    //         answer1: "Romans", 
    //         answer2: "Egyptians", 
    //         answer3: "Mayans", 
    //         correctAnswers: ["Egyptians"] 
    //     },
    //     { 
    //         question: "Who wrote the Declaration of Independence?", 
    //         answer1: "Benjamin Franklin", 
    //         answer2: "Thomas Jefferson", 
    //         answer3: "James Madison", 
    //         correctAnswers: ["Thomas Jefferson"] 
    //     },
    //     { 
    //         question: "What wall fell in 1989 symbolizing the end of the Cold War?", 
    //         answer1: "Great Wall of China", 
    //         answer2: "Berlin Wall", 
    //         answer3: "Hadrian's Wall", 
    //         correctAnswers: ["Berlin Wall"] 
    //     },
    //     { 
    //         question: "Which empire was ruled by Genghis Khan?", 
    //         answer1: "Ottoman Empire", 
    //         answer2: "Mongol Empire", 
    //         answer3: "Roman Empire", 
    //         correctAnswers: ["Mongol Empire"] 
    //     },
    //     { 
    //         question: "What ship sank in 1912 after hitting an iceberg?", 
    //         answer1: "Lusitania", 
    //         answer2: "Titanic", 
    //         answer3: "Britannic", 
    //         correctAnswers: ["Titanic"] 
    //     },
    //     { 
    //         question: "Who was known as the Maid of Orléans?", 
    //         answer1: "Cleopatra", 
    //         answer2: "Joan of Arc", 
    //         answer3: "Marie Curie", 
    //         correctAnswers: ["Joan of Arc"] 
    //     },
    //     { 
    //         question: "Which of the following occurred in the 20th century?", 
    //         answer1: "World War I", 
    //         answer2: "Renaissance", 
    //         answer3: "Moon Landing", 
    //         correctAnswers: ["World War I", "Moon Landing"] 
    //     },
    //     { 
    //         question: "Which revolution began in 1789?", 
    //         answer1: "American Revolution", 
    //         answer2: "French Revolution", 
    //         answer3: "Russian Revolution", 
    //         correctAnswers: ["French Revolution"] 
    //     }
    // ],
    // technology: [
    //     { 
    //         question: "What does CPU stand for?", 
    //         answer1: "Central Processing Unit", 
    //         answer2: "Computer Personal Unit", 
    //         answer3: "Central Program Unit", 
    //         correctAnswers: ["Central Processing Unit"] 
    //     },
    //     { 
    //         question: "Which company developed the Android OS?", 
    //         answer1: "Apple", 
    //         answer2: "Google", 
    //         answer3: "Microsoft", 
    //         correctAnswers: ["Google"] 
    //     },
    //     { 
    //         question: "What does HTML stand for?", 
    //         answer1: "Hyper Trainer Marking Language", 
    //         answer2: "HyperText Markup Language", 
    //         answer3: "HighText Machine Language", 
    //         correctAnswers: ["HyperText Markup Language"] 
    //     },
    //     { 
    //         question: "Which device is used to input text into a computer?", 
    //         answer1: "Monitor", 
    //         answer2: "Keyboard", 
    //         answer3: "Speaker", 
    //         correctAnswers: ["Keyboard"] 
    //     },
    //     { 
    //         question: "What is the name for malicious software?", 
    //         answer1: "Firmware", 
    //         answer2: "Malware", 
    //         answer3: "Shareware", 
    //         correctAnswers: ["Malware"] 
    //     },
    //     { 
    //         question: "Which company created the iPhone?", 
    //         answer1: "Apple", 
    //         answer2: "Samsung", 
    //         answer3: "Nokia", 
    //         correctAnswers: ["Apple"] 
    //     },
    //     { 
    //         question: "Which of the following are programming languages?", 
    //         answer1: "Python", 
    //         answer2: "JavaScript", 
    //         answer3: "Photoshop", 
    //         correctAnswers: ["Python", "JavaScript"] 
    //     },
    //     { 
    //         question: "Which protocol secures data on the web?", 
    //         answer1: "HTTP", 
    //         answer2: "FTP", 
    //         answer3: "HTTPS", 
    //         correctAnswers: ["HTTPS"] 
    //     },
    //     { 
    //         question: "What does IoT stand for?", 
    //         answer1: "Internet of Things", 
    //         answer2: "Interface of Tech", 
    //         answer3: "Input Output Tech", 
    //         correctAnswers: ["Internet of Things"] 
    //     },
    //     { 
    //         question: "Which company owns GitHub?", 
    //         answer1: "Google", 
    //         answer2: "Microsoft", 
    //         answer3: "Meta", 
    //         correctAnswers: ["Microsoft"] }
    // ],
    // sports: [
    //     { 
    //         question: "How many players are on a standard soccer team on the field?", 
    //         answer1: "11", 
    //         answer2: "10", 
    //         answer3: "9", 
    //         correctAnswers: ["11"] 
    //     },
    //     { 
    //         question: "Which sport uses a shuttlecock?", 
    //         answer1: "Badminton", 
    //         answer2: "Tennis", 
    //         answer3: "Squash", 
    //         correctAnswers: ["Badminton"] 
    //     },
    //     { 
    //         question: "In basketball, how many points is a shot from beyond the arc worth?", 
    //         answer1: "2", 
    //         answer2: "3", 
    //         answer3: "4", 
    //         correctAnswers: ["3"] 
    //     },
    //     { 
    //         question: "What surface is the French Open played on?", 
    //         answer1: "Grass", 
    //         answer2: "Clay", 
    //         answer3: "Hard court", 
    //         correctAnswers: ["Clay"] 
    //     },
    //     { 
    //         question: "Which country hosted the 2016 Summer Olympics?", 
    //         answer1: "Brazil", 
    //         answer2: "China", 
    //         answer3: "UK", 
    //         correctAnswers: ["Brazil"] 
    //     },
    //     { 
    //         question: "In which sport would you perform a slam dunk?", 
    //         answer1: "Volleyball", 
    //         answer2: "Basketball", 
    //         answer3: "Handball", 
    //         correctAnswers: ["Basketball"] 
    //     },
    //     { 
    //         question: "How long is a marathon?", 
    //         answer1: "42.195 km", 
    //         answer2: "40.000 km", 
    //         answer3: "26.195 km", 
    //         correctAnswers: ["42.195 km"] 
    //     },
    //     { 
    //         question: "What is the maximum break in snooker?", 
    //         answer1: "147", 
    //         answer2: "155", 
    //         answer3: "167", 
    //         correctAnswers: ["147"] 
    //     },
    //     { 
    //         question: "Which of the following are Olympic sports?", 
    //         answer1: "Swimming", 
    //         answer2: "Cricket", 
    //         answer3: "Tennis", 
    //         correctAnswers: ["Swimming", "Tennis"] 
    //     },
    //     { 
    //         question: "In baseball, how many strikes make an out?", 
    //         answer1: "2", 
    //         answer2: "3", 
    //         answer3: "4", 
    //         correctAnswers: ["3"] }
    // ]
};

let QuizData = JSON.parse(localStorage.getItem("quizData")) || [];

function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    if (timer) timer.classList.remove('danger');
}

function startTimer(seconds) {
    stopTimer();
    time = seconds;
    if (timer) {
        timer.textContent = `Time: ${formatTime(time)}`;
        timer.classList.toggle('danger', time <= 10);
    }
    timerInterval = setInterval(() => {
        time -= 1;
        if (timer) {
            timer.textContent = `Time: ${formatTime(Math.max(time, 0))}`;
            timer.classList.toggle('danger', time <= 10 && time > 0);
        }
        if (time <= 0) {
            stopTimer();

            const qData = Quizzes[quizSession.category][questionIndex];
            results[questionIndex] = {
                question: qData.question,
                chosen: [],
                correct: qData.correctAnswers,
                status: 'wrong'
            };

            renderProgress();

            questionIndex += 1;
            const list = Quizzes[quizSession.category] || [];
            if (questionIndex < list.length) {
                displayQuestion(questionIndex);
            } else {
                finishQuiz();
            }
        }

    }, 1000);
}

function calculatePoints(remainingSeconds) {
    if (remainingSeconds <= 0) return 0;
    const elapsed = QUESTION_TIME - remainingSeconds;
    if (elapsed <= 10) return 100;
    if (elapsed <= 20) return 75;
    if (elapsed <= 25) return 50;
    return 25;
}

function renderProgress() {
    if (!progressContainer) return;
    const total = (Quizzes[quizSession.category] || []).length;
    progressContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const seg = document.createElement('div');
        seg.className = 'segment';

        if (results[i]) {
            if (results[i].status === 'correct') seg.classList.add('correct');
            else if (results[i].status === 'wrong') seg.classList.add('wrong');
        }

        progressContainer.appendChild(seg);
    }
}

function displayQuestion(index) {
    const list = Quizzes[quizSession.category] || [];
    const item = list[index];
    if (!item) return;

    if (answersContainer) {
        answersContainer.innerHTML = '';
    }

    const questionText = item.question;
    if (question) {
        question.textContent = `Question ${index + 1}: ${questionText}`;
    }

    const oldHint = document.querySelector('.multi-hint');
    if (oldHint) oldHint.remove();

    const answers = [item.answer1, item.answer2, item.answer3];

    const inputType = item.correctAnswers.length === 1 ? 'radio' : 'checkbox';

    if (inputType === 'checkbox' && question) {
        const hint = document.createElement('p');
        hint.textContent = "Multiple answers";
        hint.classList.add('multi-hint');
        question.insertAdjacentElement('afterend', hint);
    }

    answers.forEach((text, i) => {
        const label = document.createElement('label');
        label.classList.add('answer' + (i + 1));

        const input = document.createElement('input');
        input.type = inputType;
        input.name = "quiz-answer";
        input.classList.add('answer-checkbox');

        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + text));

        if (answersContainer) {
            answersContainer.appendChild(label);
        }

        input.addEventListener('change', () => {
            clicked = true;
        });
    });

    renderProgress();
    startTimer(QUESTION_TIME);
}

function validateAnswer(questionIndex) {
    let quiz = (Quizzes[quizSession.category] || [])[questionIndex];
    if (!quiz) return { isCorrect: false, chosen: [], correct: [] };

    let selected = [];
    if (answersContainer) {
        let inputs = answersContainer.querySelectorAll('input.answer-checkbox');
        inputs.forEach(input => {
            if (input.checked && input.parentElement) {
                selected.push(input.parentElement.textContent.trim());
            }
        });
    }

    let correctAnswers = (quiz.correctAnswers || []).map(a => a.trim());
    let chosenAnswers = selected.map(a => a.trim());

    let isCorrect = (
        chosenAnswers.length === correctAnswers.length &&
        correctAnswers.every(a => chosenAnswers.includes(a))
    );

    // Save to QuizData
    let data = {
        question: quiz.question,
        chosen: chosenAnswers,
        correct: correctAnswers
    };

    QuizData.push(data);
    localStorage.setItem("quizData", JSON.stringify(QuizData));

    return {
        isCorrect,
        chosen: chosenAnswers,
        correct: correctAnswers
    };
}


function nextQuestion() {
    stopTimer();

    const result = validateAnswer(questionIndex);

    if (result.isCorrect) {
        const gained = calculatePoints(time);
        scoreVal += gained;
        if (score) score.textContent = 'Score: ' + scoreVal;
    }

    results[questionIndex] = {
        question: (Quizzes[quizSession.category] || [])[questionIndex].question,
        chosen: result.chosen,
        correct: result.correct,
        status: result.isCorrect ? "correct" : "wrong"
    };

    renderProgress();

    questionIndex += 1;
    let list = Quizzes[quizSession.category] || [];

    if (questionIndex < list.length) {
        displayQuestion(questionIndex);


        if (questionIndex === list.length - 1 && nextBtn) {
            nextBtn.textContent = "Validate";
        }
    } else {
        finishQuiz();
    }
}


function finishQuiz() {
    stopTimer();
    stopGlobalTimer();

    const report = {
        name: quizSession.name || "Anonymous",
        dateTime: new Date().toISOString(),
        score: scoreVal,
        category: quizSession.category,
        totalTime: globalSeconds,
        responses: results,
    };

    let reports = JSON.parse(localStorage.getItem("quizReports")) || [];
    reports.push(report);
    localStorage.setItem("quizReports", JSON.stringify(reports));

    // Clean up temp data
    localStorage.removeItem("quizData");
    localStorage.removeItem("quizSession");

    window.location.href = "results.html";
}

function validateQuizFormat(data, category) {
    // Root object must exist and be an object
    if (!data || typeof data !== "object") {
        console.error("Invalid JSON: root should be an object");
        return false;
    }

    if (!Array.isArray(data[category])) {
        console.error("Invalid JSON: Quizz should be an array");
        return false;
    }

    // Validate each question object
    for (let i = 0; i < data[category].length; i++) {
        const item = data[category][i];

        // Required string fields
        if (typeof item.question !== "string") {
            console.error(`Invalid format in question ${i}: missing 'question'`);
            return false;
        }

        if (typeof item.answer1 !== "string" ||
            typeof item.answer2 !== "string" || 
            typeof item.answer3 !== "string") {
            console.error(`Invalid format in question ${i}: 'answer1/2/3' must be strings`);
            return false;
        }

        // Correct answers must be array of strings
        if (!Array.isArray(item.correctAnswers) ||
            !item.correctAnswers.every(a => typeof a === "string")) {
            console.error(`Invalid format in question ${i}: 'correctAnswers' must be an array of strings`);
            return false;
        }
    }

    return true;
}

function startGlobalTimer() {
    globalSeconds = 0;
    if (globalTimerInterval) clearInterval(globalTimerInterval);

    globalTimerInterval = setInterval(() => {
        globalSeconds++;
        if (globalTimerElem) {
            globalTimerElem.textContent = "Total: " + formatTime(globalSeconds);
        }
    }, 1000);
}

function stopGlobalTimer() {
    if (globalTimerInterval) {
        clearInterval(globalTimerInterval);
        globalTimerInterval = null;
    }
}

    let quizSession = JSON.parse(localStorage.getItem('quizSession')) || {};
        const baseUrl = window.location.origin + window.location.pathname.split("/")[1] + "/";
        let link = `${baseUrl}Json/${quizSession.category}.json`;

        let category = document.querySelector('.quiz-category');
        category.textContent = `Category: ${quizSession.category}`;

        let question = document.querySelector('.question-text');
        let answersContainer = document.querySelector('.answers-container');
        let score = document.querySelector('.quiz-score');
        let timer = document.querySelector('.quiz-timer');
        const progressContainer = document.querySelector('.quiz-progress');
        let globalTimerElem = document.querySelector('.quiz-global-timer');
        let timerInterval;

        let questionIndex = 0;
        let scoreVal = 0;
        let time = 0;

        let clicked = false;

        const QUESTION_TIME = 30;

        let results = [];

        let globalTimerInterval;
        let globalSeconds = 0;


    fetch(link)
        .then(response => response.json())
        .then(data => {
            validateQuizFormat(data, quizSession.category);

            Quizzes = data;

            if (!quizSession.category) {
                location.href = 'index.html';
            }

            if (score) {
                score.textContent = 'Score: 0';
            }
            let QuizData = {
                category: quizSession.category,
                question: [],
                chosen: [],
                correct: [],
                status: []
            }
            localStorage.setItem("quizData", JSON.stringify(QuizData));


            startGlobalTimer();
            displayQuestion(0);
            renderProgress();

            const nextBtn = document.querySelector('.next-btn');
            if (nextBtn) {
                nextBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    if (clicked) {
                        clicked = false;
                        let list = Quizzes[quizSession.category] || [];
                        if (questionIndex < list.length) {
                            nextQuestion();
                        } else {
                            finishQuiz();
                        }
                    }
                });
            }

        })
        .catch(err => console.error(err));