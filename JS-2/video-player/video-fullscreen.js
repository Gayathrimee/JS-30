// creating a fullScreen button

// function openScreen (){
//     if (fullScreen.requestFullscreen) {
//         fullScreen.requestFullscreen();
//     } else if (fullScreen.webkitRequestFullscreen){
//         fullScreen.webkitRequestFullscreen();
//     }
// }

// progress.addEventListener('click', openScreen)

// it's kinda not working. ok bye

const fullScreen = player.querySelectorAll('.fullscreen')


function fullScreen(e){
    console.log(e);
    this.classList.add('.player:fullscreen','.player_video')
}
console.log("jo");
fullScreen.forEach(button => button.addEventListener('click',fullScreen));

// ....

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        player.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}

fullscreenButton.addEventListener('click', toggleFullscreen)