const datetimeInput = document.getElementById("datetime");
const startBtn = document.getElementById("startBtn");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let countdownInterval;

startBtn.addEventListener("click", () => {
  const targetDate = new Date(datetimeInput.value);

  if (!targetDate || targetDate <= new Date()) {
    alert("Please select a valid future date and time!");
    return;
  }

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = 0;
      alert("⏰ Countdown Completed!");
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }, 1000);
});
