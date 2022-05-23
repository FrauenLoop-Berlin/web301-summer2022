/* for detailed info, check this tutorial https://www.youtube.com/watch?v=XF1_MlZ5l6M */

const grandparent = document.querySelector( '.grandparent' );
const parent = document.querySelector( '.parent' );
const child = document.querySelector( '.child' );

const grandparent2 = document.querySelector( '.grandparent2' );
const parent2 = document.querySelector( '.parent2' );
const child2 = document.querySelector( '.child2' );

const divs = document.querySelectorAll( 'div' );

// bubble is default, reads from outside, to inside

grandparent.addEventListener( 'click', e => {
  console.log(e)
  console.log( 'grandparent bubble' );
} )

parent.addEventListener( 'click', e => {
  console.log( 'parent bubble' );
} )

child.addEventListener( 'click', e => {
  console.log( 'child bubble' );
})

document.addEventListener( 'click', e => {
  console.log( 'document' );
} )

/*
capture is the opposite, reads from inside, to outside
to enable this option, an extra configurtation is needed
*/

child.addEventListener( 'click', e => {
  console.log( 'child capture' );
}, {
  capture: true
} )

/*
e.stopPropagation() interrupts the series of events
*/

grandparent.addEventListener( 'click', e => {
  console.log( 'stop propagation' );
  e.stopPropagation()
} )

/* allowing to run for a certaing time */
grandparent2.addEventListener( 'click', e => {
  console.log( 'grandparent2' );
} )

parent2.addEventListener( 'click', e => {
  console.log( 'parent2' );
} )

child2.addEventListener( 'click', e => {
  console.log( 'child2' );
} )

parent2.addEventListener( 'click', printHallo);

setTimeout( () => {
  parent2.removeEventListener( 'click', printHallo );
}, 3000 )

function printHallo() {
  console.log( 'Hallo Papa 2' );
}

/* delegating events */
addGlobalEventListener( 'click', 'div', e => {
  console.log( 'I am a div and you pressed me' );
} )

function addGlobalEventListener ( type, selector, callback ) {
  document.addEventListener( type, e => {
    if ( e.target.matches( selector ) ) {
      callback( e );
    }
  } )
}

const newDiv = document.createElement( 'div' );
newDiv.style.width = '200px';
newDiv.style.height = '200px';
newDiv.style.backgroundColor = 'purple';
document.body.append( newDiv );
