let reports = JSON.parse(localStorage.getItem("quizReports")) || [];
let lastReport = reports[reports.length - 1];

if (lastReport) {
    let container = document.createElement("div");
    container.classList.add("results-container");

    container.innerHTML = `
        <div style="display: flex; justify-content: space-between;">
            <h1 style="text-align: center;">Quiz Results</h1>
            <a style="float: right;" href="index.html" class="home-link">Home</a>
        </div>
        <p><strong>Name:</strong> ${lastReport.name}</p>
        <p><strong>Category:</strong> ${lastReport.category}</p>
        <p><strong>Score:</strong> ${lastReport.score}</p>
        <p><strong>Total Time:</strong> ${formatTime(lastReport.totalTime || 0)}</p>
        <p><strong>Date:</strong> ${new Date(lastReport.dateTime).toLocaleString()}</p>
        <h2>Detailed Report</h2>
    `;

    lastReport.responses.forEach((r, i) => {
        let qDiv = document.createElement("div");
        qDiv.classList.add("question-report", r.status);

        qDiv.innerHTML = `
            <h3>Q${i + 1}: ${r.question}</h3>
            <p><strong>Your answer:</strong> ${r.chosen.length ? r.chosen.join(", ") : "No answer"}</p>
            <p><strong>Correct answer:</strong> ${r.correct.join(", ")}</p>
        `;

        container.appendChild(qDiv);
    });

    const printBtn = document.createElement('button');
    printBtn.textContent = "Print / Save as PDF";
    printBtn.id = "print-report-btn";

    container.appendChild(printBtn);
    document.body.appendChild(container);

    printBtn.addEventListener('click', () => {
        window.print();
    });
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')} : ${String(secs).padStart(2, '0')}`;
}