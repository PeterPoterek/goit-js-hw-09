import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start');

let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > this.config.defaultDate) {
      selectedDate = selectedDates[0];
    } else {
      window.alert('Please choose a date in the future');
    }
  },
};

flatpickr(datetimePicker, options);

startButton.addEventListener('click', () => {
  if (selectedDate) {
    console.log(selectedDate);
  }
});
