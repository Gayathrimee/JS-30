// ... to log out something in console in a specific time-period

// function setDate(){
//     console.log('Hi');
// }
// setInterval(setDate,8000);

// ... to log out seconds

// function setDate(){
//     const now = new Date();
//     const seconds = now.getSeconds();
//     console.log(seconds)
// }
// setInterval(setDate,1000);

// ... converting seconds to degrees

// function setDate(){
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const secondsDegrees = (seconds / 60) * 360;
//     console.log(seconds);
// }
// setInterval(setDate,1000);

// taking the second-hand

// const secondHand = document.querySelector('.second-hand')

// function setDate(){
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const secondsDegrees = (seconds / 60) * 360 + 90;   // + 90 is cuz we already given the second hands a 'transform:rotate 90 degress' in css
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
//     console.log(seconds);
// }
// setInterval(setDate,1000);


// taking min-hand and hr-hand

// const secondHand = document.querySelector('.second-hand')

// function setDate(){
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const secondsDegrees = (seconds / 60) * 360 + 90;   // + 90 is cuz we already given the second hands a 'transform:rotate 90 degress' in css
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
//     console.log(seconds);
// }
// setInterval(setDate,1000);

// const minutesHand = document.querySelector('.min-hand')

// function setMin(){
//     const now = new Date();
//     const minutes = now.getMinutes();
//     const minutesDegrees = (minutes / 60) * 360 + 90;
//     minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
//     console.log(minutes);
// }
// setInterval(setMin,1000)

// const hourHand = document.querySelector('.hour-hand')

// function setHour(){
//     const now = new Date();
//     const hours = now.getHours();
//     const hoursDegrees = (hours / 12) * 360 + 90;
//     hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
//     console.log(hours)
// }
// setInterval(setHour,1000);

//  or the min hand and hour hand was my creation. let do what written in the video


const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;   // + 90 is cuz we already given the second hands a 'transform:rotate 90 degress' in css
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutes);

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours);
}
setInterval(setDate,1000);
