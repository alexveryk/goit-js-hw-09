import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const btnStart = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
btnStart.addEventListener('click', btnOnStart);
btnStart.setAttribute('disabled', true);

let result = null;
let diferent = null;
let currentTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);

    diferent = selectedDates[0].getTime() - options.defaultDate.getTime();
    // diferent = selectedDates[0].getTime() - currentTime;

    console.log('diferent', diferent);

    result = convertMs(diferent);

    days.textContent = addLeadingZero(result.days);
    hours.textContent = addLeadingZero(result.hours);
    minutes.textContent = addLeadingZero(result.minutes);
    seconds.textContent = addLeadingZero(result.seconds);

    disabledBtn(options.defaultDate, selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(num) {
  return num.toString().padStart(2, '0');
}

function btnOnStart(e) {
  let setId = null;

  if (e.target.nodeName === 'BUTTON') {
    setId = setInterval(() => {
      diferent -= 1000;
      result = convertMs(diferent);
      days.textContent = addLeadingZero(result.days);
      hours.textContent = addLeadingZero(result.hours);
      minutes.textContent = addLeadingZero(result.minutes);
      seconds.textContent = addLeadingZero(result.seconds);
      console.log(diferent);
      if (diferent < 1000) {
        clearInterval(setId);
        console.log('Finished interval');
      }
    }, 1000);
  }
}

function disabledBtn(one, two) {
  if (one < two) {
    btnStart.removeAttribute('disabled');

    console.log(one);
  } else {
    Notiflix.Notify.failure('Please choose a date in the future');
    btnStart.setAttribute('disabled', true);
    days.textContent = '00';
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';
  }
}
