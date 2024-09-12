// const hero = document.querySelector('.hero');
// const text = hero.querySelector('h1');

// function shadow(e){
//     // console.log(e);
//     // instead of using :
//     // const width = hero.offsetWidth;
//     // const height = hero.offsetHeight;

//     // -> can use:
//     const {offsetWidth: width, offsetHeight:height} = hero;

//     // we also need to get the info about where the person's cursor was.so:
//     let {offsetX: x, offsetY: y} = e;

//     // console.log(this, e.target);
//     if (this !== e.target){
//         x = x + e.target.offestLeft;
//         y = y + e.target.offsetTop;
//     }

//     console.log(x,y);
// }

// hero.addEventListener('mousemove',shadow);
 


//... now to set how many pixels the shadow should move:

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500;  // 100px -> how many pixels the shadow would move

function shadow(e){
    // console.log(e);
    // instead of using :
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;

    // -> can use:
    const {offsetWidth: width, offsetHeight:height} = hero;

    // we also need to get the info about where the person's cursor was.so:
    let {offsetX: x, offsetY: y} = e;

    // console.log(this, e.target);
    if (this !== e.target){
        x = x + e.target.offestLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round(x / width * walk) - (walk / 2);
    const yWalk = Math.round(y / height * walk) - (walk / 2);
    // :this max implies => if walk is 100, then it should go max at 50 and min at -50 instead of max at 100 and min at 0.
    // same for y 

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${xWalk}px 0 green,
    ${yWalk}px ${xWalk * -1}px 0 blue,
    ${yWalk * -1}px ${xWalk}px 0 yellow
    `;
    console.log(xWalk,yWalk);

    // console.log(x,y);
}

hero.addEventListener('mousemove',shadow);