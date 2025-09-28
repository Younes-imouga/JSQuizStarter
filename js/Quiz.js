let Quizzes = {};

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

    localStorage.setItem("quizResults", JSON.stringify(results));

    renderProgress();

    questionIndex += 1;
    localStorage.setItem("questionIndex", questionIndex); 

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
    localStorage.removeItem("quizResults");
    localStorage.removeItem("questionIndex");

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

        // getting the github link and putting it in a variable so the link will work like in localHost
        const currentUrl = window.location.href;
        const urlParts = currentUrl.split('/'); 
        const baseUrl = urlParts.slice(0, urlParts.length - 1).join('/');
        const link = `${baseUrl}/Json/${quizSession.category}.json`;

        // for testing in local



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

            // Restore progress
            let savedIndex = localStorage.getItem("questionIndex");
            if (savedIndex !== null) {
                questionIndex = parseInt(savedIndex, 10);
            }

            let savedResults = JSON.parse(localStorage.getItem("quizResults")) || [];
            results = savedResults;

            startGlobalTimer();
            displayQuestion(questionIndex);
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