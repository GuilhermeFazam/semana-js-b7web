let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second
  )}`;

  let sDeg = positionCount(360, 60, second);
  let mDeg = positionCount(360, 60, minute);
  let hDeg = positionCount(360, 12, hour);

  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

function positionCount(totalArea, spaceArea, time) {
  return (totalArea / spaceArea) * time - 90;
}

setInterval(updateClock, 1000);

updateClock();
