
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const dataTime = document.querySelector('#datetime-picker');
// const dataTime = document.getElementById('datetime-picker')

  const timer = document.querySelector('.timer');

  const  days = document.querySelector('span[data-days]');
   const hours = document.querySelector('span[data-hours]');
   const minutes = document.querySelector('span[data-minutes]');
   const seconds = document.querySelector('span[data-seconds]');
const btnStart =  document.querySelector('button[data-start]')
btnStart.disabled = true;




flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDates = new Date(selectedDates[0]).getTime();
      if (new Date > selectedDates) {
      
        Notify.failure('Please choose a date in the future');
  
      } else {
       btnStart.removeAttribute('disabled');
      }
    }
  });

  



function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}


btnStart.addEventListener('click', () => {
 let timerInterval = setInterval(() => {
  let countdown = new Date(dataTime.value) - new Date;
  btnStart.disabled = true;
  if (countdown >= 0) {
    let timeObject = convertMs(countdown);
    days.textContent = addLeadingZero(timeObject.days);
    hours.textContent = addLeadingZero(timeObject.hours);
    minutes.textContent = addLeadingZero(timeObject.minutes);
    seconds.textContent = addLeadingZero(timeObject.seconds);
   
  if ( timeObject.dayss === 0 && timeObject.hours === 0 && timeObject.minutes === 0 && timeObject.seconds === 0 ){
   Notify.success("The countdown is complete")
    clearInterval(timerInterval);
   btnStart.disabled = false;
   } 
     }
 }, 1000)
})



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

 

;