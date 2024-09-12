const clock = document.querySelector('.clock')
const hands = document.querySelectorAll('.hand')
const hours = document.querySelector('.hour-hand')
const mints = document.querySelector('.min-hand')
const seconds = document.querySelector('.seconds-hand')
const times = document.querySelector('.time')

function currentTime(){

    const time = new Date()
    const hrs = time.getHours()
    const theHrs = hrs % 12
    const min = time.getMinutes()
    const sec = time.getSeconds()

    hours.style.transform = `translate(-50%,-100%) rotate(
    ${scale(theHrs, 0, 23, 0, 360)}deg)`
    mints.style.transform = `translate(-50%,-100%) rotate(
    ${scale(min,0,59,0,360)}deg)`
    seconds.style.transform = `translate(-50%,-100%) rotate(
    ${scale(sec, 0, 59, 0, 360)}deg)`

    times.innerHTML = `${theHrs < 10 ? `0${theHrs}` : theHrs} : ${min < 10 ? `0${min}` : min}`
}

const scale = (num,in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) /
    (in_max - in_min) + out_min;
}

currentTime()               

setInterval(currentTime, 1000)