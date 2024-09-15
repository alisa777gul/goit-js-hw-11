import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const buttonStart = document.querySelector('button[data-start]');
const datePicker = document.querySelector("#datetime-picker");

let timerId = null;
let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate - Date.now() <= 0) {
     iziToast.error({
        title: 'Error',
       message: 'Please choose a date in the future',
           position: 'topRight'
      });
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

buttonStart.addEventListener('click', () => {
  buttonStart.disabled = true;
  datePicker.disabled = true;

  startCountdown(userSelectedDate);
});

const countdownDays = document.querySelector("span[data-days]");
const countdownHours = document.querySelector("span[data-hours]");
const countdownMinutes = document.querySelector("span[data-minutes]");
const countdownSeconds = document.querySelector("span[data-seconds]");

function startCountdown(endDay) {
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const timeRemaining = endDay - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(timerId);
      updateTimer(0, 0, 0, 0);
      datePicker.disabled = false;
      buttonStart.disabled = true;

      iziToast.success({
        title: 'Countdown Finished',
        message: 'The countdown has reached zero!',
           position: 'topRight'
      });

      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    updateTimer(days, hours, minutes, seconds);
  }, 1000);
}

function updateTimer(days, hours, minutes, seconds) {
  countdownDays.textContent = addLeadingZero(days);
  countdownHours.textContent = addLeadingZero(hours);
  countdownMinutes.textContent = addLeadingZero(minutes);
  countdownSeconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}