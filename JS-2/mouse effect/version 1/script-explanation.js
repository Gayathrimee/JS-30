const hero = document.querySelector('.hero');
// this lone select the 1st element in the document with the class 'hero' and assign it to the variable 'hero'

const text = hero.querySelector('h1');
// this line selects the h1 element inside the 'hero' element and assigns it to the variable 'text'

const walk = 500;
// this variable defines how far shadow will move. The value 500 means the shadow can move up to 250 pixels in any direction from the center.

// SHADOW FUNCTION

function shadow(e) {
    // Extract the width and height of the hero element
    const {offsetWidth: width, offsetHeight: height} = hero;

    // Extract the mouse position relative to the hero element
    let {offsetX: x, offsetY: y} = e;

    // Adjust the mouse position if the target is not the hero element itself
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // Calculate the distance the shadow should move
    const xWalk = Math.round(x / width * walk) - (walk / 2);
    const yWalk = Math.round(y / height * walk) - (walk / 2);

    // Apply the calculated shadow to the text element
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 red,
        ${xWalk * -1}px ${xWalk}px 0 green,
        ${yWalk}px ${xWalk * -1}px 0 blue,
        ${yWalk * -1}px ${xWalk}px 0 yellow
    `;
    console.log(xWalk, yWalk);
}

// . `const {offsetWidth:width, offsetHeight:height} = hero`;
// this line uses destructuring to get the width and height of the 'hero' element.

// . `let {offsetX:x, offsetY:y} = e` :
// this line gets the mouse's x and y positions relative to the `hero` element.

// .`if (this !== e.target) {...}`: 
// this condition checks if the event target (`e.target`) is not the `hero` element itself. 
// If it's not, it adjusts the 'x' and 'y' values to account for the target element's offset.

// `const xWalk = Math.round (x/ width * walk) - (walk/2);
// this calculates how far the shadow should move horizontally. It normalizes 'x' position to a value between `-walk/2 and walk/2`.

// 'const yWalk = Math.round(y / height * walk) - (walk / 2)';: 
// This calculates how far the shadow should move vertically. It normalizes the y position to a value between -walk/2 and walk/2.
// text.style.textShadow = ...: This line sets the text-shadow CSS property of the text element. 
// The shadow is composed of four colored shadows (red, green, blue, and yellow) at different positions based on the calculated xWalk and yWalk.

hero.addEventListener('mousemove', shadow);

// This line adds an event listener to the hero element that listens for the mousemove event. When the mouse moves over the hero element, the shadow function is called.

// Summary
// When you move your mouse over the hero element, the shadow function calculates how far the mouse is from the
//  center of the element and adjusts the shadow of the h1 text accordingly, creating a dynamic shadow effect that changes with the mouse's position.