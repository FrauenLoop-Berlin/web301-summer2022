/* iterates over the months using the counter nav to keep track */
import { load } from './main.mjs';
import { closeModal } from './modal.mjs';
import { saveEvent, deleteEvent } from './events.mjs';

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    counter++;
    //console.log('Next ' + counter)
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    counter--;
    //console.log('Prev ' + counter);
    load();
  });

  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}

export { initButtons };
