  const startButton = document.querySelector('.next-btn');
  const nameInput = document.getElementById('player-name');
  const categorySelect = document.getElementById('category');

  function showError(inputEl, message) {
    if (!inputEl) return;
    inputEl.setAttribute('aria-invalid', 'true');
    inputEl.title = message;
    inputEl.style.borderColor = '#e74c3c';
    inputEl.style.boxShadow = '0 0 0 3px rgba(231,76,60,0.15)';
  }

  function clearError(inputEl) {
    if (!inputEl) return;
    inputEl.removeAttribute('aria-invalid');
    inputEl.title = '';
    inputEl.style.borderColor = '';
    inputEl.style.boxShadow = '';
  }

  function validate() {
    let valid = true;

    const nameVal = (nameInput?.value || '').trim();
    const categoryVal = categorySelect?.value || '';

    clearError(nameInput);
    clearError(categorySelect);

    if (!nameVal) {
      valid = false;
      showError(nameInput, 'Please enter your name or alias');
    }

    if (!categoryVal) {
      valid = false;
      showError(categorySelect, 'Please select a category');
    }

    return { valid, nameVal, categoryVal };
  }

  function persistAndGo(nameVal, categoryVal) {
    const session = {
      name: nameVal,
      category: categoryVal,
    };
    try {
      localStorage.setItem('quizSession', JSON.stringify(session));
    } catch (_) {}
    window.location.href = 'Quiz.html';
  }

  if (startButton) {
    startButton.addEventListener('click', function(e) {
      e.preventDefault();
      const { valid, nameVal, categoryVal } = validate();
      if (valid) {
        persistAndGo(nameVal, categoryVal);
      }
    });
  }

  function renderLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    if (!leaderboardList) return;

    let reports = JSON.parse(localStorage.getItem('quizReports')) || [];

    reports.sort((a, b) => b.score - a.score);

    const top5 = reports.slice(0, 5);

    leaderboardList.innerHTML = '';

    top5.forEach(player => {
      const li = document.createElement('li');
      li.textContent = `${player.name}: ${player.score}`;
      leaderboardList.appendChild(li);
    });

    if (top5.length === 0) {
      const li = document.createElement('li');
      li.textContent = "No scores yet.";
      leaderboardList.appendChild(li);
    }
  };

  renderLeaderboard();

function renderStats() {
  const reports = JSON.parse(localStorage.getItem("quizReports")) || [];

  const statTotal = document.getElementById("stat-total");
  const statAverage = document.getElementById("stat-average");
  const statAvgCategory = document.getElementById("stat-avg-category");

  if (!reports.length) {
    statTotal.textContent = "0";
    statAverage.textContent = "0";
    statAvgCategory.innerHTML = "-";
    return;
  }

  // Total attempts
  statTotal.textContent = reports.length;

  // Average score across all
  const avgScore = (
    reports.reduce((sum, r) => sum + r.score, 0) / reports.length
  ).toFixed(2);
  statAverage.textContent = avgScore;

  // Average score by category
  const categories = [...new Set(reports.map(r => r.category))]; // unique categories

  let catAvg = [];
  let catAttempts = [];

  const avgHtml = categories
    .map(cat => {
      const catReports = reports.filter(r => r.category === cat);
      const avg = (
        catReports.reduce((sum, r) => sum + r.score, 0) / catReports.length
      ).toFixed(2);

      catAvg.push(avg);
      catAttempts.push(catReports.length);
      
      return `
        <div class="avg-card">
          <span class="avg-label">${cat}:</span>
          <span class="avg-value">${avg}</span>
        </div>
      `;
    })
    .join("");

  statAvgCategory.innerHTML = avgHtml;

  const ctx = document.getElementById('myChart').getContext('2d');
  const ctx2 = document.getElementById('myChart2').getContext('2d');

  displayChart(categories, catAvg, "bar", ctx, "Average Score per Category", "Average Score", 1000);
  displayChart(categories, catAttempts, "line", ctx2, "Total Attempts per Category", "Total Attempts", reports.length + 1);

}

renderStats();

function displayChart(categories, data, type, ctx, title, label, max) {

  const myChart = new Chart(ctx, {
      type: type, 
      data: {
          labels: categories,
          datasets: [{
              label: label,
              data: data,
              backgroundColor: [
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: true,
                  position: 'top'
              },
              title: {
                  display: true,
                  text: title
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  max: max
              }
          }
      }
  });
}