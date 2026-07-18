// 画面ルーティング(ハッシュベース)と描画ロジック
const appEl = document.getElementById("app");

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderGenreList() {
  const cards = GENRES.map((genre) => {
    const count = QUESTIONS.filter((q) => q.genre === genre.id).length;
    return `
      <a class="genre-card" href="#/genre/${genre.id}">
        <h3>${escapeHtml(genre.name)}</h3>
        <p>${escapeHtml(genre.desc)}</p>
        <span class="count">過去問 ${count}問</span>
      </a>
    `;
  }).join("");

  appEl.innerHTML = `
    <h2>ジャンルを選んでください</h2>
    <div class="genre-grid">${cards}</div>
  `;
}

function isImageChoice(choice) {
  return typeof choice === "object" && choice !== null && "img" in choice;
}

function renderChoiceContent(choice) {
  if (isImageChoice(choice)) {
    return `<img class="choice-img" src="${escapeHtml(choice.img)}" alt="${escapeHtml(choice.alt || "選択肢の図")}">`;
  }
  return escapeHtml(choice);
}

function renderGenreDetail(genreId) {
  const genre = GENRES.find((g) => g.id === genreId);
  if (!genre) {
    appEl.innerHTML = `<p>ジャンルが見つかりませんでした。</p><a class="back-link" href="#/">← ジャンル一覧へ戻る</a>`;
    return;
  }

  const questions = QUESTIONS.filter((q) => q.genre === genreId);

  const questionCards = questions
    .map((q, idx) => {
      const hasImageChoices = q.choices.some(isImageChoice);
      const choicesHtml = q.choices
        .map((choice, i) => {
          return `<li data-correct="${i === q.answer}">(${i + 1}) ${renderChoiceContent(choice)}</li>`;
        })
        .join("");

      const diagramHtml = q.diagram
        ? `<img class="question-diagram" src="${escapeHtml(q.diagram.src)}" alt="${escapeHtml(q.diagram.alt || "問題の図")}">`
        : "";

      const answerChoice = q.choices[q.answer];
      const answerContentHtml = isImageChoice(answerChoice)
        ? `<img class="choice-img" src="${escapeHtml(answerChoice.img)}" alt="${escapeHtml(answerChoice.alt || "正解の図")}">`
        : escapeHtml(answerChoice);

      return `
        <div class="question-card">
          <span class="year-label">${escapeHtml(q.yearLabel)}</span>
          <p class="question-statement">${escapeHtml(q.statement)}</p>
          ${diagramHtml}
          <ul class="choice-list${hasImageChoices ? " choice-list-images" : ""}" id="choices-${idx}">${choicesHtml}</ul>
          <button class="reveal-btn" data-target="answer-${idx}" data-choices="choices-${idx}">解答・解説を見る</button>
          <div class="answer-box" id="answer-${idx}">
            <p class="answer-label">正解: (${q.answer + 1}) ${answerContentHtml}</p>
            <p class="explanation">${escapeHtml(q.explanation)}</p>
          </div>
        </div>
      `;
    })
    .join("");

  appEl.innerHTML = `
    <a class="back-link" href="#/">← ジャンル一覧へ戻る</a>
    <h2 class="genre-heading">${escapeHtml(genre.name)}</h2>
    <div class="basics-box">
      <h4>基礎解説</h4>
      <div>${escapeHtml(BASICS[genreId] || "")}</div>
    </div>
    <h3>過去問</h3>
    ${questionCards}
  `;

  appEl.querySelectorAll(".reveal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const answerBox = document.getElementById(btn.dataset.target);
      const isVisible = answerBox.classList.toggle("is-visible");
      btn.textContent = isVisible ? "解答・解説を隠す" : "解答・解説を見る";

      if (isVisible) {
        document.querySelectorAll(`#${btn.dataset.choices} li`).forEach((li) => {
          if (li.dataset.correct === "true") {
            li.classList.add("is-correct");
          }
        });
      }
    });
  });
}

function render() {
  const hash = window.location.hash || "#/";
  const genreMatch = hash.match(/^#\/genre\/(.+)$/);

  if (genreMatch) {
    renderGenreDetail(decodeURIComponent(genreMatch[1]));
  } else {
    renderGenreList();
  }
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
