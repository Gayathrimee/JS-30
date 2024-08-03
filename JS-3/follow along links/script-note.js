const triggers = document.querySelectorAll('a');

// Purpose: Select all anchor (<a>) elements on the page.
// Explanation: document.querySelectorAll('a') returns a NodeList of all <a> elements in the document. 
// This is useful if you want to apply some behavior to all links on the page. 

const highlight = document.createElement('span');
highlight.classList.add('highlight');

// Purpose: Create a new HTML element that will be used to highlight elements.
// Explanation:

//*  document.createElement('span'): Creates a new <span> element.
//*  highlight.classList.add('highlight'): Adds a CSS class named highlight to this newly created <span>. 
// This class will likely be used to style the <span> element, such as giving it a background color or border to make it stand out.

document.body.append(highlight);

// Purpose: Add the newly created <span> element to the document.
// Explanation: 'document.body.append(highlight)' appends the <span> with the class highlight to the end of the <body> element. 
// This makes it part of the DOM and allows it to be positioned or styled.

// Summary

//*  triggers: A NodeList of all <a> elements.
//*  highlight: A newly created <span> element with a CSS class highlight.
//*  document.body.append(highlight): Appends the <span> to the body of the document.

function highlightLink(){
    // console.log('HIGHLIGHT!!!');
    // console.log(this);
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

//     Purpose: Calculate the size and position of the hovered anchor tag and update the highlight element to match this size and position.
// Explanation:
// const linkCoords = this.getBoundingClientRect();: this refers to the anchor tag being hovered over. getBoundingClientRect() returns an object containing the element’s size and position relative to the viewport.
// const coords = { ... }: Creates an object with width, height, top, and left properties. top and left are adjusted to account for the page’s scroll position by adding window.scrollY and window.scrollX, respectively.
// highlight.style.width = ${coords.width}px;: Sets the width of the highlight element to match the width of the anchor tag.
// highlight.style.height = ${coords.height}px;: Sets the height of the highlight element to match the height of the anchor tag.
// highlight.style.transform = translate(${coords.left}px, ${coords.top}px);: Positions the highlight element over the anchor tag using CSS transform.