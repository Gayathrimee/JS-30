// select all of the nodes
const timeNodes = document.querySelectorAll('[data-time]');

console.log(timeNodes)

// to change the node list into an actual array of strings:

const seconds = timeNodes.map(node => node.dataset.time);
// but this will show an error such that timeNodes.map is not a fn. To solve this:

// 1. use spread operator in timeNodes:-

const timeNode = [...document.querySelectorAll('[data-time]')];

// 2. or we can run array.from around the entire thing:-

const timNodes = Array.from(document.querySelectorAll('[data-time]'));
// now the if type seconds in the console, it will show times:
// what we did was we mapped it which means, we made it from an array of list items and into an array of strings

// ........now to to split the seconds and mints 

const secnds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins,secs] = timeCode.split(':');
        return (mins * 60) + secs;
        console.log(mins,secs);
    });

//..... now using parseFloat: to converts a string into a floating-point number.

const [mins,secs] = timeCode.split(':').map(parseFloat);
// (or) using fns
const [minss,secss] = timeCode.split(':').map(function(str){
    return parseFloat(str);
});

//...... to get the total number of seconds:

const seconnds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins,secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
        console.log(mins,secs);
    })
    .reduce((total,vidSeconds) => total + vidSeconds);
// this will produce the total seconds in the entire video(converted mints into secs) => 17938

//.... now to get the total hours:

let secondsLeft = seconds;
const hours = secondsLeft / 3600;
//it will show 4.11234
// and to round it:
const hrs = Math.floor(secondsLeft/3600);

secondsLeft = secondsLeft % 3600;
console.log(secondsLeft);  //we have 3538 seconds left


// lets do a math play:
// to give 10 smarties(a choclate smarties) to 5 kiddos:
// 10/5 = 2 -> each will get 2.
// if there is 11 smarties:
// 11 /5 = 2.2 -> can't divide the smarties into .2 pieces:
// so how many full smarties each kid would get:
// Math.floor(11/5) -> 2 
// and the left is: 
// 11 % 5 = 1  -> what mod does is it says how many are left after they've been evenly distributed 
// 5 % 3 = 2, 5 % 2 = 1

// in the case of time:
// 73/ 60 = 1.2166666...   [.2116666 is not the seconds left, its the percentage]
// Math.floor(73/60) = 1
// 73 % 60 = 13  [i.e. there is 13 seconds left after 1 mint]
