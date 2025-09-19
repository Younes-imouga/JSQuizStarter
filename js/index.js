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