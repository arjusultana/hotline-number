let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
let callHistory = [];

const heartEl = document.getElementById('heart-count');
const coinEl = document.getElementById('coin-count');
const copyEl = document.getElementById('copy-count');
const historyList = document.getElementById('history-list');

function updateCounts() {
  heartEl.textContent = heartCount;
  coinEl.textContent = coinCount;
  copyEl.textContent = copyCount;
}

function toggleFavorite(button) {
  const heartCount = document.getElementById("heart-count");

  if (button.innerText === "♡") {
    button.innerText = "❤️";  // outline → fill
    heartCount.innerText = parseInt(heartCount.innerText) + 1;
  } else {
    button.innerText = "♡";   // fill → outline
    heartCount.innerText = parseInt(heartCount.innerText) - 1;
  }
}

function copyNumber(number, button) {
  navigator.clipboard.writeText(number).then(() => {
    alert(`Copied ${number} to clipboard!`);
    copyCount++;
    updateCounts();
    button.style.backgroundColor = 'green';
    setTimeout(() => { button.style.backgroundColor = ''; }, 500);
  });
}

function makeCall(serviceName, number) {
  if (coinCount < 20) {
    alert('Insufficient coins! You need at least 20 coins to make a call.');
    return;
  }
  coinCount -= 20;
  updateCounts();
  alert(`Calling ${serviceName} at ${number}`);

  const timestamp = new Date().toLocaleString();
  callHistory.push({ name: serviceName, number, time: timestamp });
  updateHistory();
}

function updateHistory() {
  historyList.innerHTML = '';
  callHistory.forEach(item => {
    const li = document.createElement('li');
    li.className = 'bg-gray-50 p-3 rounded border';
    li.innerHTML = `
      <div class="font-semibold">${item.name}</div>
      <div class="text-sm text-gray-600">${item.number}</div>
      <div class="text-xs text-gray-400">${item.time}</div>
    `;
    historyList.appendChild(li);
  });
}

function clearHistory() {
  callHistory = [];
  updateHistory();
}

updateCounts();
updateHistory();
