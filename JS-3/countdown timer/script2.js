let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('display__end-time');



function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    // console.log({now,then});

    countdown = setInterval( () => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // check if we should stop it!
        if (secondsLeft <= 0){
            clearInterval(countdown);
            return;
        }

    // display it!
        displayTimeLeft(secondsLeft)
            console.log(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0':''}${
        remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour -12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}: ${minutes}`;
}
