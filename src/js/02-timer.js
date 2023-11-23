import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');

const timerValues = timer.querySelectorAll('.value');
startButton.setAttribute('disabled', '');

let selectedDate;

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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > this.config.defaultDate) {
      startButton.removeAttribute('disabled');
      selectedDate = selectedDates[0];
    } else {
      window.alert('Please choose a date in the future');
    }
  },
};

flatpickr(datetimePicker, options);

const addLeadingZero = value => {
  return value.padStart(2, 0);
};

startButton.addEventListener('click', () => {
  if (selectedDate) {
    let currentDate = new Date();

    const timerID = setInterval(() => {
      const timeDifference = convertMs(selectedDate - currentDate);

      timerValues.forEach(value => {
        if (value.hasAttribute('data-days')) {
          value.innerHTML = addLeadingZero(timeDifference.days.toString());
        } else if (value.hasAttribute('data-hours')) {
          value.innerHTML = addLeadingZero(timeDifference.hours.toString());
        } else if (value.hasAttribute('data-minutes')) {
          value.innerHTML = addLeadingZero(timeDifference.minutes.toString());
        } else if (value.hasAttribute('data-seconds')) {
          value.innerHTML = addLeadingZero(timeDifference.seconds.toString());
        }
      });

      currentDate = new Date();

      if (timeDifference <= 0) {
        clearInterval(timerID);
      }
    }, 1000);
  }
});
