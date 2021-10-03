const clockTitle = document.querySelector(".js-clock");
const christmas = new Date("2021-12-25 00:00:00");

// 시간단위(몫 계산용)
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

// 문자열자릿수 맞추는 용
function padString(num) {
  return String(num).padStart(2, "0");
}

let now;

function updateClock() {
  now = new Date();

  const diff = christmas - now; // millisecond기준 차이

  const days = Math.floor(diff / DAY);
  const hours = padString(Math.floor((diff - days * DAY) / HOUR));
  const minutes = padString(
    Math.floor((diff - days * DAY - hours * HOUR) / MINUTE)
  );
  const seconds = padString(
    Math.floor((diff - days * DAY - hours * HOUR - minutes * MINUTE) / SECOND)
  );

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateClock();
setInterval(updateClock, 1000);
