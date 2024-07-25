// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');

console.log(skipButtons)

// build out functions
// function togglePlay(){
//     if(video.paused){
//         video.play();

//     } else {
//         video.pause();
//     }
// }
// togglePlay();

// (or)
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';  // -> if video is paused, play it else pause it
    video[method]();

    // this thing is also equals to:

    // const method = ;
    // video[video.paused ? 'play': 'pause']();
}

function updateButton(){
    const icon = this.paused ? '►': '❚❚';
    toggle.textContent = icon;
    console.log('Update the Button');
    console.log(icon);
}

function skip(){
    // console.log('skipping!')
    console.log(this.dataset.skip);
    video.curretTime += parseFloat(this.dataset.skip);
}
// hook up the event listners

video.addEventListener('click', togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton); 
toggle.addEventListener('click',togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

// hook up the event listners

video.addEventListener('click', togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton); 
toggle.addEventListener('click',togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));