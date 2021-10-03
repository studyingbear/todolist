const clockTitle = document.querySelector(".js-clock");

// 문자열자릿수 맞추는 용
function padString(num) {
  return String(num).padStart(2, "0");
}

let now;

function updateClock() {
  now = new Date();

  const hour = padString(now.getHours());
  const minute = padString(now.getMinutes());
  const second = padString(now.getSeconds());
  clockTitle.innerText = `${hour}시 ${minute}분 ${second}초`;
}

updateClock();
setInterval(updateClock, 1000);
