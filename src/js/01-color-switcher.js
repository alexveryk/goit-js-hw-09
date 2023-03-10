const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', selectBtnStart);
btnStop.addEventListener('click', selectBtnStop);

let intervalId = null;
btnStop.setAttribute('disabled', true);

function selectBtnStart(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');

  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function selectBtnStop(event) {
  clearInterval(intervalId);

  btnStop.setAttribute('disabled', true);
  btnStart.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
