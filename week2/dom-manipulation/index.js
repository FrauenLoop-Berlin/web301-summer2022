/* based on this tutorial: https://www.youtube.com/watch?v=y17RuWkWdn8 */

/* 1: append */
const body = document.body;
body.append( 'Hello World' );

/* 2: create element */
// creates a reference to an element
const createDiv = document.createElement( 'div' );
// adds the element to the page
body.append( createDiv );

/* 3: adding text with innerText or textContent */
const queryDiv = document.querySelector( 'div' );
// displays text as it in the html
console.log( queryDiv.textContent );
// displays text as it is rendered in the page
console.log( queryDiv.innerText );
// add a text to the div
createDiv.innerText = 'I am a created innerText';

/* 4: adding element */
// html injection is a severe security risk, for more see https://www.youtube.com/watch?v=ns1LX6mEvyM&t=0s
createDiv.innerHTML = '<h1>I am a created innerHTML</h1>';
// option, coding step by step
const h1 = document.createElement( 'h1' );
h1.innerText = 'I am a secure option for innerHTML';
createDiv.append( h1 );

/* 5: remove element */
const bye = document.createElement( 'h2' );
bye.innerText = 'Byeeeee';
createDiv.append( bye );
//bye.remove()

/* 6: modify elements attributes */
const tooltip = document.querySelector( '#tooltip' )
// accessing attributes
console.log( tooltip.getAttribute( 'id' ) );
console.log( tooltip.getAttribute( 'title' ) );
// or, get it as a method
console.log( tooltip.id );
console.log( tooltip.title );

// setting or changing attributes
tooltip.setAttribute( 'title', 'I am a tooltip' );
console.log( tooltip.title );

tooltip.title = 'I changed my name!';
console.log( tooltip.title );

// removing attributes
//tooltip.removeAttribute( 'title' );
console.log( tooltip.title );

/* 7: manipulating class attributes */
tooltip.classList.add( 'new-class' );
tooltip.classList.remove( 'span-class' );
// adds if it doesn't exist, remove it if it exists
tooltip.classList.toggle( 'new-class2' );
// adds if true, removed if false
tooltip.classList.toggle( 'span-class', true );

/* 8: manipulating styles */
tooltip.style.backgroundColor = 'red';

/*
Exercise:
1. Create a table with 3 rows and 3 columns
2. Add consecutive numbers to each cell using a for loop
3. Style the table
*/
