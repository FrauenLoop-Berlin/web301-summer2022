/* iterates over the months using the counter nav to keep track */
import { load } from './main.mjs';
import { closeModal } from './modal.mjs';
import { saveEvent, deleteEvent } from './events.mjs';

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    // console.log("Nav plus " + nav)
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    // console.log("Nav minus " + nav)
    load();
  });

  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}

export { initButtons };
