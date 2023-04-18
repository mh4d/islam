function countdown() {
  const countdownElement = document.getElementById("countdown");
  const targetDate = new Date("2023-04-21T00:00:59"); // set your target date and time
  const now = new Date();
  const remainingTime = targetDate.getTime() - now.getTime();
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  countdownElement.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(countdown, 1000);

