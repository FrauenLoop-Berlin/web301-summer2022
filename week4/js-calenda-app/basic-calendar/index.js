let nav = 0;

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
  const dt = new Date();

  /* if loading from back or next, go the the month it is at to keep state */
  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
    console.log(dt.setMonth(new Date().getMonth() + nav))
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

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      } else {
        daySquare.classList.add('padding');
      }
    }
    calendar.appendChild(daySquare);
  }
}

/* iterates over the months using the counter nav to keep track */
function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    console.log("Nav plus " + nav)
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    console.log("Nav minus " + nav)
    load();
  });
}

initButtons();
load();
