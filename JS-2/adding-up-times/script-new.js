// const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

//   const seconds = timeNodes
//     .map(node => node.dataset.time)
//     .map(timeCode => {
//       const [mins, secs] = timeCode.split(':').map(parseFloat);
//       return (mins * 60) + secs;
//     })
//     .reduce((total, vidSeconds) => total + vidSeconds);

//     let secondsLeft = seconds;
//     const hours = Math.floor(secondsLeft / 3600);
//     secondsLeft = secondsLeft % 3600;

//     const mins = Math.floor(secondsLeft / 60);
//     secondsLeft = secondsLeft % 60;

//     console.log(hours, mins, secondsLeft);

// The final code 


// .........Explanation


const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// Purpose: Select all HTML elements with a data-time attribute and convert the resulting NodeList into an array.
// Explanation: document.querySelectorAll('[data-time]') returns a NodeList of all elements that have a data-time attribute. 
// Array.from() converts this NodeList into an array for easier manipulation.

// ...............

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

//1. node.dataset.time: Extracts the data-time attribute value from each element.
//2.  .map(timeCode => { ... }):
  
      //*  timeCode.split(':'): Splits the time string into minutes and seconds.
      //*  .map(parseFloat): Converts the split string values into floating-point numbers.
      //*  (mins * 60) + secs: Converts the total time into seconds.
  
//3.  .reduce((total, vidSeconds) => total + vidSeconds): Sums up all the total seconds.


// ...........

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;


//>  Purpose: Convert the total seconds into hours, minutes, and seconds.
//>  Explanation:

// *    Math.floor(secondsLeft / 3600): Calculates the number of hours. 3600 is the number of seconds in an hour.
// *    secondsLeft % 3600: Updates secondsLeft to be the remainder after extracting hours.
// *    Math.floor(secondsLeft / 60): Calculates the number of minutes from the remaining seconds.
// *    secondsLeft % 60: Updates secondsLeft to be the remainder after extracting minutes. This final value is the remaining seconds.

// .........
console.log(hours, mins, secondsLeft);

// Purpose: Output the calculated hours, minutes, and seconds to the console.

