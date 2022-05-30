/* iterates over the months using the counter to keep track */
import { load } from './main.mjs';

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
}

export { initButtons }
