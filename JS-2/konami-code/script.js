const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup',(e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

// printing the secret code:  this will show ding ding when we type wesbos on window
if (pressed.join('').includes(secretCode)){
    console.log('DING DING')
    cornify_add();
}

    console.log(pressed);
});
