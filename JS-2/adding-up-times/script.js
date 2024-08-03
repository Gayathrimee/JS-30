// select all of the nodes
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

console.log(timeNodes)

// to change the node list into an actual array of strings:
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
      const[mins,secs] = timeCode.split(':').map(parseFloat);
      return (mins * 60) + secs;
      console.log(mins,secs);
    })
    .reduce((total,vidSeconds) => total + vidSeconds);    //will get the total time in seconds

// to get the total hrs:
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);  //math.floor is used to get the hours integers or to round the hours
secondsLeft = secondsLeft % 3600;
console.log(secondsLeft)  //we have 3538 seconds left

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins,secondsLeft);   //will get 4hrs 58min 58seconds 
