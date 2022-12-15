const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

localStorage.setItem('highScores', JSON.stringify(highScores));
window.location.assign('/');