// get our elements:

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.play_slider');
const fullScreen = player.querySelector('.fullscreen')

console.log(skipButtons)

// build out functions:

//1. Toggle play/pause for the video

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

// 2. Update the play/pause button icon

function updateButton(){
    const icon = this.paused ? '►': '❚❚';
    toggle.textContent = icon;
    console.log('Update the Button');
    console.log(icon);
}

// 3. Skip forward or backward

function skip(){
    // console.log('skipping!')
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

// 4. Handle updates to range sliders (volume, playback speed, etc.)

function handleRangeUpdate(){
    video[this.name] = this.value;
    console.log(this.name);
    console.log(this.value);
}

// 5. Update the progress  bar as the video plays

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis =  `${percent}%`;
}

// 6. Scrub through the video

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    // console.log(e);
}

// 7. fullScreen 
function toggleFullscreen(){
    if (!document.fullscreenElement){
        player.requestFullscreen();

    } else {
        document.exitFullscreen();
    }
}

// hook up the event listners

// 1. Toggle play/pause when the video or button is clicked
video.addEventListener('click', togglePlay);
toggle.addEventListener('click',togglePlay);

// 2. Update the button when the video is played or paused
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);

// 3. Update the progress bar as the video plays
video.addEventListener('timeupdate',handleProgress) 

// 4. Skip forward or backward when skip button are clicked
skipButtons.forEach(button => button.addEventListener('click', skip));

// 5. Scrub through the video when interacting with the progress bar
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// 6. Scrub through the video when interacting with the progress bar
let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click',toggleFullscreen);