const textInput = document.querySelector('#my-work-input');
const startIcon = document.querySelector('.fa.fa-play');
const pauseIcon = document.querySelector('.fa.fa-pause');
const clockTimer = document.querySelector('#clock-text');
let timeInSeconds = 25 * 60;

function startClock() {
  console.log('start clock');
  setInterval(() => {
    const dateObj = new Date(timeInSeconds-- * 1000);
    console.log(dateObj);

    minutes = dateObj.getUTCMinutes();
    seconds = dateObj.getSeconds();
    let timeString = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    console.log(timeString);
    clockTimer.textContent = timeString;
  }, 1000);
}

startIcon.addEventListener('click', startClock);
