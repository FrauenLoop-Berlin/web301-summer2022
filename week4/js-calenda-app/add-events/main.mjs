import { openModal } from './modal.mjs';
import { initButtons } from './buttons.mjs';
import { saveEvent } from './events.mjs';

globalThis.counter = 0;
globalThis.clicked = null; /* the day you clicked */
globalThis.events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
  const dt = new Date();

  /* if loading from back or next, go the the month it is at to keep state */
  if (counter !== 0) {
    dt.setMonth(new Date().getMonth() + counter, 1);
    //console.log(dt.setMonth(new Date().getMonth() + counter))
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate(); /* returns how many days in that month */

  /* gets the name of the weekday to find the index it is at in the array of weekdays */
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'numeric',
    weekday: 'long',
    day: 'numeric',
  });
  /* calculates how many empty squares are needed to start the month based on the weekdays index */
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  /* displays the current month and year  */
  document.getElementById('monthDisplay').innerText =
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = ''; /* clears calendar state */

  /* renders the month view */
  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventForDay = events.find(e => e.date === dayString);

      if (i - paddingDays === day && counter === 0) {
        daySquare.id = 'currentDay';
      }

      if (eventForDay) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
      }

      daySquare.addEventListener('click', () => openModal(dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);
  }
}

initButtons();
load();

export { load };
