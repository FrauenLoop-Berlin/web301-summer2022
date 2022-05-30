<!-- This code is based on this tutorial: https://www.youtube.com/watch?v=m9OSBJaQTlM -->
If you would like to replicate on your own, with a little help of instructions, follow a step-by-step pseudocode

## Basic App structure
[] create a js file
[] create a css file
[] create a basic html template and connect css (as a link in the head) and the javascript file (as a script in the last line before ending the body tag)

## HTML, view structure
[] according to your design, create the structure adding classes or id's to manipulate the content dynamicaly using DOM manipulation: display month and year; buttons to go
the previous or next month, etc
[] hardcode the static content: the weekdays. Start on Sunday.

## Creating basic functionalities
### Defyning variables
[] create the variables to be manipulated with classes or id's. Ex:
```
const calendar = document.getElementById('calendar');
```
[] create a counter to keep track which month the user is

### Accessing data
[] using the date method, get: day, month and year

### Manipulating data to dynamically create elements in the DOM
[] find how many days there's in the current month
[] find in which day of the week the current month starts
[] using a loop, create elements to render the days of the current month, from 1 until the last day of the month. Remember to reneder (append) the element!
[] create elements to render empty squares/ spaces to fill the first row of weekdays until the 1st day of the month, if it doesn't start on a Sunday

## Iterating through months
[] create event listener to back button to decrement counter variable that keeps track of which month the user is
[] create event listener to next button to increment counter variable that keeps track of which month the user is
[] clear the calendar state to re-render the month (wipe it out before creating a new month)
[] connect the counter to the calendar
[] check agains a real calendar, to see if your calendar is working correctly

## Creating extra functionalities: adding events to calendar
[] create an event listener for when a user clicks on a day
[] create a variable to store information (created events) using localStorage
[] parse the events or return empty events array
[] add html structure with ids or classes for event modal (pop up where users add events)
[] add html input for user to add a text about the event
[] add html button for save event
[] add html button for delete event
[] create a function to open the modal when user clicks on a day
  [] know which date user clicked
  [] iterate over events to find if an event already exist in a day
  [] if event exist, show "delete modal" (will need to create later)
  [] if event does not exist in that day, allow user to add an event
  [] display modal using css style.display = 'block'
  [] call the function passing the date as an argument
[] create function to close the modal when user clicks the cancel button
  [] close modal using css style.display = 'none'
[] create function to save event
  [] if user has typed inside of the event, push it to events array
  [] save event in localStorage: setItem(), JSON.stringify()
  [] check if the events are being saved in localStorage: inspector => Application => Local Storage
  [] close the modal after saving the event
  [] display the event in the calendar
    [] if there's an event, create a div or element for that day
[] create "delete modal"
  [] create HTML  with id or class to create a "delete modal", which will show an existing event and will have 2 buttons: delete and close
  [] create in HTML button for delete the event
  [] create function to delete event
    [] filter the event user need to delete
    [] reset info in the Local Storage
    [] close the modal
  [] create in HTML button to close the modal


## Refine your app: IMPORTANT! not a detail
[] test the accessibility using axe dev tools
[] make sure your app is responsible, work in the styles to improve it
[] add tests to ensure the quality of your app and avoid regression

## Documentation & deployment: creating an awesome portfolio
### Documentation, Open Source
[] create a readme explaining the tech stack used. Add a gif to explain what the app does
[] deploy it to GitHub pages to make it shareable
[] add a license
[] add workflow to show how your app works

### Organization
[] use your project n
kanban to allow a recruiter to see how you organize yourself and break the the problem into small pieces
[] make your code modular (both css and mjs)

### Further functionalities
[] add more than one event per day
[] edit event
[] instead of localStorage, use a database
[] add an API: add Quote to the calender: https://quotes.rest/
[] instead of modal, use a sidebar to show the day, where you get a different quote per day
[] improve this code! is there repeated code you can astract? Can you name things better? Can you change the logic to improve it?
