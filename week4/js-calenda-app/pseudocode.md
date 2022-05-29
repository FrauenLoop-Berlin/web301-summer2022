<!-- This code is based on this tutorial: https://www.youtube.com/watch?v=m9OSBJaQTlM -->
If you would like to replicate on your own, with a little help of instructions,
follow a step-by-step pseudocode

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

