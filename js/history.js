const attemptContainer = document.getElementById("attempt-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageIndicator = document.getElementById("page-indicator");

let reports = JSON.parse(localStorage.getItem("quizReports")) || [];
let currentPage = 0; // start at first attempt

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2,'0')} : ${String(secs).padStart(2,'0')}`;
}

function renderAttempt(index) {
    attemptContainer.innerHTML = "";

    if (reports.length === 0) {
        attemptContainer.innerHTML = "<p>No quiz attempts yet.</p>";
        pageIndicator.textContent = "";
        return;
    }

    const attempt = reports[index];
    const attemptDiv = document.createElement("div");
    attemptDiv.classList.add("attempt");

    attemptDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2>Attempt ${index + 1}</h2>
            <div class="export-container">
                <button class="export-json-btn" data-index="${index}">Export JSON</button>
                <button class="export-csv-btn" data-index="${index}">Export CSV</button>
            </div>
        </div>
        <p><strong>Name:</strong> ${attempt.name}</p>
        <p><strong>Category:</strong> ${attempt.category}</p>
        <p><strong>Score:</strong> ${attempt.score}</p>
        <p><strong>Total Time:</strong> ${formatTime(attempt.totalTime || 0)}</p>
        <p><strong>Date:</strong> ${new Date(attempt.dateTime).toLocaleString()}</p>
        <h3>Detailed Report:</h3>
    `;

    attempt.responses.forEach((r) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question-report", r.status);

        questionDiv.innerHTML = `
            <p><strong>Question:</strong> ${r.question}</p>
            <p><strong>Your answer:</strong> ${r.chosen.length ? r.chosen.join(", ") : "No answer"}</p>
            <p><strong>Correct answer(s):</strong> ${r.correct.join(", ")}</p>
        `;
        attemptDiv.appendChild(questionDiv);
    });

    // ✅ Revision button only if there are wrong answers
    if (attempt.responses.some(r => r.status === "wrong")) {
        const revBtn = document.createElement("button");
        revBtn.textContent = "Revision Quiz";
        revBtn.classList.add("rev-btn");

        revBtn.addEventListener("click", () => {

            localStorage.setItem("quizSession", JSON.stringify({
                name: attempt.name,
                category: attempt.category,
                revision: attempt.responses.filter(r => r.status === "wrong")
            }));
            window.location.href = "quiz.html";

        });

        attemptDiv.appendChild(revBtn);
    }

    attemptContainer.appendChild(attemptDiv);

    pageIndicator.textContent = `${index + 1} / ${reports.length}`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === reports.length - 1;

    const jsonBtn = attemptDiv.querySelector(".export-json-btn");
    jsonBtn.addEventListener("click", () => exportJSON(index));

    const csvBtn = attemptDiv.querySelector(".export-csv-btn");
    csvBtn.addEventListener("click", () => exportCSV(index));
}



prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        renderAttempt(currentPage);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < reports.length - 1) {
        currentPage++;
        renderAttempt(currentPage);
    }
});

// Render first attempt initially
renderAttempt(currentPage);

function exportJSON(index) {
    const attempt = reports[index];
    const reportData = JSON.stringify(attempt, null, 2);
    const blob = new Blob([reportData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `attempt-${index + 1}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
    
function exportCSV(index) {
    const attempt = reports[index];
    if (!attempt) return;

    let csvRows = [];
    csvRows.push(["Question","Your Answer","Correct Answer","Status"].join(","));

    attempt.responses.forEach(r => {
        let row = [
            `"${r.question}"`,
            `"${r.chosen.join(", ")}"`,
            `"${r.correct.join(", ")}"`,
            `"${r.status}"`
        ];
        csvRows.push(row.join(","));
    });

    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `attempt-${index + 1}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}
