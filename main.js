const display = document.querySelector(".countDowDisplay");
const currDateDiv = document.querySelector(".currentDate");
const countDownDiv = document.querySelector(".countDownDisplay");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function updateCurrDate(time) {
  currDateDiv.textContent = time;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountDownDisplay(days, hours, minutes, seconds) {
  return `
  <span>${days} days <span>
  <span>${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}<span>
 `;
}

let date = new Date();
let hours = pad(date.getHours());
let minutes = pad(date.getMinutes());
let seconds = pad(date.getSeconds());

const newYear = new Date(`January 01, ${date.getFullYear() + 1} `);

let timeDiff = newYear.getTime() - date.getTime();
let daysRemaining = Math.floor(timeDiff / 8.64e7);
let hoursRemaining = Math.floor((timeDiff % 8.64e7) / 3.6e6);
let minutesRemaining = Math.floor(((timeDiff % 8.64e7) % 3.6e6) / 60000);
let secondsRemaining = Math.floor(
  (((timeDiff % 8.64e7) % 3.6e6) % 60000) / 1000
);

updateCurrDate(
  `Today ${
    months[date.getMonth()]
  }. ${date.getDate()}, ${date.getFullYear()} ${hours}:${minutes}:${seconds}`
);

countDownDiv.innerHTML = updateCountDownDisplay(
  daysRemaining,
  hoursRemaining,
  minutesRemaining,
  secondsRemaining
);

setInterval(function updateTime() {
  date = new Date();
  hours = pad(date.getHours());
  minutes = pad(date.getMinutes());
  seconds = pad(date.getSeconds());

  updateCurrDate(
    `Today ${
      months[date.getMonth()]
    }. ${date.getDate()}, ${date.getFullYear()} ${hours}:${minutes}:${seconds}`
  );

  timeDiff = newYear.getTime() - date.getTime();
  daysRemaining = Math.floor(timeDiff / 8.64e7);
  hoursRemaining = Math.floor((timeDiff % 8.64e7) / 3.6e6);
  minutesRemaining = Math.floor(((timeDiff % 8.64e7) % 3.6e6) / 60000);
  secondsRemaining = Math.floor((((timeDiff % 8.64e7) % 3.6e6) % 60000) / 1000);

  countDownDiv.textContent = "";
  countDownDiv.innerHTML = updateCountDownDisplay(
    daysRemaining,
    hoursRemaining,
    minutesRemaining,
    secondsRemaining
  );
}, 1000);
