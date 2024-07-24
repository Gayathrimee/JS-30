// const panels = document.querySelectorAll('.panel');

// function toggleOpen(){
//     console.log('hello')
//     this.classList.toggle('open');
// }
// panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// here it will open whenever we click each pics
// now lets add open-active (refer css)

// const panels = document.querySelectorAll('.panel');

// function toggleOpen(){
//     console.log('hello')
//     this.classList.toggle('open');
// }
// function toggleActive(e){
//     console.log(e.propertyName)         //will show us what properties are used when the transition occurs
//     // this.classList.toggle('open-active')
// }
// panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// applying the transition open into the gallery

const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    console.log('hello')
    this.classList.toggle('open');
}
function toggleActive(e){
    console.log(e.propertyName)         //will show us what properties are used when the transition occurs

    if (e.propertyName.includes('flex')){
    this.classList.toggle('open-active')
    }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
