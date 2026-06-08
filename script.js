function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const meridiem = hours >= 12? "PM" : "AM";
  hours= hours % 12 || 12;


  

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  document.getElementById("clock").innerText =
    `${hours}:${minutes}:${seconds}  ${meridiem}`;
}

setInterval(updateClock, 1000);

updateClock();