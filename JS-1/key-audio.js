// window.addEventListener("keydown",function(e){
//     console.log(e.keyCode)
// })

// // ...
// window.addEventListener("keydown",function(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     console.log(audio);
// })

// ...
// window.addEventListener("keydown",function(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     if(!audio) return;  //stop the fn from running all together
//     audio.currentTime = 0;   //rewind to the start
//     audio.play();
// });

// ...
// window.addEventListener("keydown",function(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if(!audio) return;  //stop the fn from running all together
//     audio.currentTime = 0;   //rewind to the start
//     audio.play();
//     console.log(key)
// });

// ... adding a class 'playing'
// window.addEventListener("keydown",function(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     if(!audio) return;  //stop the fn from running all together

//     audio.currentTime = 0;   //rewind to the start
//     audio.play();

//     // key.addClass('playing');  //this is jquery (or)
//     key.classList.add('playing');   //vanilla js
// });

// ....

// window.addEventListener("keydown",function(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     if(!audio) return;  //stop the fn from running all together

//     audio.currentTime = 0;   //rewind to the start
//     audio.play();

//     // key.addClass('playing');  //this is jquery (or)
//     key.classList.add('playing');   //vanilla js
// });

// function removeTransition(e){
//     console.log(e);
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// // ....

// window.addEventListener("keydown",function(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     if(!audio) return;  //stop the fn from running all together

//     audio.currentTime = 0;   //rewind to the start
//     audio.play();

//     // key.addClass('playing');  //this is jquery (or)
//     key.classList.add('playing');   //vanilla js
// });

// function removeTransition(e){
//     if (e.propertyName != 'transform') return;  //skip it if it's not a transform
//     console.log(e.propertyName);
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// .... removing transition after it came

// window.addEventListener("keydown",function(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     if(!audio) return;  //stop the fn from running all together

//     audio.currentTime = 0;   //rewind to the start
//     audio.play();

//     // key.addClass('playing');  //this is jquery (or)
//     key.classList.add('playing');   //vanilla js
// });

// function removeTransition(e){
//     if (e.propertyName != 'transform') return;  //skip it if it's not a transform
//     console.log(e.propertyName);
    
//     // console.log(this)   whenever comes any doubt, 
//     //                     log it out to check what 'this' refers to

//     this.classList.remove('playing');

// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// ... making the eventlistener more better in look

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;  //stop the fn from running all together

    audio.currentTime = 0;   //rewind to the start
    audio.play();

    // key.addClass('playing');  //this is jquery (or)
    key.classList.add('playing');   //vanilla js
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;  //skip it if it's not a transform
    // console.log(e.propertyName);
    
    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown",playSound);


// Things we learned
// - key events
// - playing audio
// - listening for the transition end event
// - also if deal with animation, can listen for the animation end event which works exactly the same way