const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = Math.round(data.coords.speed);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;   //to rotate the needle
}, (err) => {
    console.log(err);
    alert('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!')
});