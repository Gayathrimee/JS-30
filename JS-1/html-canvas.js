// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// ctx.strokStyle = '#BADA55';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';

// let isDrawing = false;

// let lastX = 0;
// let lastY = 0;

// function draw(e){
//     if(!isDrawing) return;  //stop the fn from running when they are not moused down
//     console.log(e);
// }

// canvas.addEventListener('mousemove',draw); 
// canvas.addEventListener('mousedown', () => isDrawing = true);
// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);

// here we can see nothing on the canvas but we've set up the mouse moving.
// the console will logs out info only if we click and drag the mouse

// ......

// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// ctx.strokStyle = '#BADA55';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';

// let isDrawing = false;

// let lastX = 0;
// let lastY = 0;

// function draw(e){
//     if(!isDrawing) return;  //stop the fn from running when they are not moused down
//     console.log(e);

//     ctx.beginPath();

//     // start from
//     ctx.moveTo(lastX,lastY);      //it starts from 0

//     // go to
//     ctx.lineTo(e.offsetX, e.offsetY);    //and move to wherever the mouse is
//     ctx.stroke();

//     // to make it free
//     // lastX = e.offsetX;
//     // lastY = e.offsetY;

//     // (or)
//     [lastX,lastY] = [e.offsetX,e.offsetY]       //same as above
// }

// canvas.addEventListener('mousemove',draw); 
// canvas.addEventListener('mousedown', () => isDrawing = true);
// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);

// here the drawings always start from the origin 0,0
// to make it more liberal :

// ......

// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// ctx.strokeStyle = '#bada55';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';
// ctx.lineWidth = 50;
// // ctx.lineHeight = 1000;

// let isDrawing = false;

// let lastX = 0;
// let lastY = 0;

// function draw(e){
//     if(!isDrawing) return;  //stop the fn from running when they are not moused down
//     console.log(e);

//     ctx.beginPath();

//     // start from
//     ctx.moveTo(lastX,lastY);      //it starts from 0

//     // go to
//     ctx.lineTo(e.offsetX, e.offsetY);    //and move to wherever the mouse is
//     ctx.stroke();

//     // to make it free
//     // lastX = e.offsetX;
//     // lastY = e.offsetY;

//     // (or)
//     [lastX,lastY] = [e.offsetX,e.offsetY]       //same as above
// }

// canvas.addEventListener('mousedown',(e) =>{
//     isDrawing = true;
//     [lastX,lastY] = [e.offsetX,e.offsetY]
// });

// canvas.addEventListener('mousemove',draw); 
// canvas.addEventListener('mousedown', () => isDrawing = true);
// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);

// ....

// Adding 'hsl' : gives different colors while drawing. (google: mother-effing-hsl)

// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// ctx.strokeStyle = '#bada55';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';
// ctx.lineWidth = 150;
// // ctx.lineHeight = 1000;

// let isDrawing = false;

// let lastX = 0;
// let lastY = 0;
// let hue = 0;

// function draw(e){
//     if(!isDrawing) return;  //stop the fn from running when they are not moused down
//     console.log(e);

//     ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;  //gives red color with 100% saturation and 50% light
//     ctx.beginPath();

//     // start from
//     ctx.moveTo(lastX,lastY);      //it starts from 0

//     // go to
//     ctx.lineTo(e.offsetX, e.offsetY);    //and move to wherever the mouse is
//     ctx.stroke();

//     // to make it free
//     // lastX = e.offsetX;
//     // lastY = e.offsetY;

//     // (or)
//     [lastX,lastY] = [e.offsetX,e.offsetY]       //same as above

//     hue++;  // increment colors from red to others
// }

// canvas.addEventListener('mousedown',(e) =>{
//     isDrawing = true;
//     [lastX,lastY] = [e.offsetX,e.offsetY]
// });

// canvas.addEventListener('mousemove',draw); 
// canvas.addEventListener('mousedown', () => isDrawing = true);
// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);

//here we set it up. Now let changes it width at certain points:

// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// ctx.strokeStyle = '#bada55';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';
// ctx.lineWidth = 150;
// // ctx.lineHeight = 1000;

// let isDrawing = false;

// let lastX = 0;
// let lastY = 0;
// let hue = 0;

// function draw(e){
//     if(!isDrawing) return;  //stop the fn from running when they are not moused down
//     console.log(e);

//     ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;  //gives red color with 100% saturation and 50% light
//     ctx.lineWidth = hue;
//     ctx.beginPath();

//     // start from
//     ctx.moveTo(lastX,lastY);      //it starts from 0

//     // go to
//     ctx.lineTo(e.offsetX, e.offsetY);    //and move to wherever the mouse is
//     ctx.stroke();

//     // to make it free
//     // lastX = e.offsetX;
//     // lastY = e.offsetY;

//     // (or)
//     [lastX,lastY] = [e.offsetX,e.offsetY]       //same as above

//     hue++;  // increment colors from red to others
//     if (hue >= 360){
//         hue = 0;
//     }
// }

// canvas.addEventListener('mousedown',(e) =>{
//     isDrawing = true;
//     [lastX,lastY] = [e.offsetX,e.offsetY]
// });

// canvas.addEventListener('mousemove',draw); 
// canvas.addEventListener('mousedown', () => isDrawing = true);
// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);

// .....
// to reduce the width while moving 

// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// ctx.strokeStyle = '#bada55';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';
// ctx.lineWidth = 100;
// // ctx.lineHeight = 1000;

// let isDrawing = false;

// let lastX = 0;
// let lastY = 0;
// let hue = 0;
// let direction = true;

// function draw(e){
//     if(!isDrawing) return;  //stop the fn from running when they are not moused down
//     console.log(e);

//     ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;  //gives red color with 100% saturation and 50% light
//     ctx.beginPath();

//     // start from
//     ctx.moveTo(lastX,lastY);      //it starts from 0

//     // go to
//     ctx.lineTo(e.offsetX, e.offsetY);    //and move to wherever the mouse is
//     ctx.stroke();

//     // to make it free
//     // lastX = e.offsetX;
//     // lastY = e.offsetY;

//     // (or)
//     [lastX,lastY] = [e.offsetX, e.offsetY]       //same as above

//     hue++;  // increment colors from red to others

//     if (hue >= 360){
//         hue = 0;
//     }

// if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
//     direction = ! direction;
// }
// if (direction){
//     ctx.lineWidth++;
// } else {
//     ctx.lineWidth--;
// }

// }

// canvas.addEventListener('mousedown',(e) =>{
//     isDrawing = true;
//     [lastX,lastY] = [e.offsetX,e.offsetY]
// });

// canvas.addEventListener('mousemove',draw); 
// canvas.addEventListener('mousedown', () => isDrawing = true);
// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);

// to blend it

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multiply';   //google it so that we can find variety of blends

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return;  //stop the fn from running when they are not moused down
    console.log(e);

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;  //gives red color with 100% saturation and 50% light
    ctx.beginPath();

    // start from
    ctx.moveTo(lastX,lastY);      //it starts from 0

    // go to
    ctx.lineTo(e.offsetX, e.offsetY);    //and move to wherever the mouse is
    ctx.stroke();

    // to make it free
    // lastX = e.offsetX;
    // lastY = e.offsetY;

    // (or)
    [lastX,lastY] = [e.offsetX, e.offsetY]       //same as above

    hue++;  // increment colors from red to others

    if (hue >= 360){
        hue = 0;
    }

if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
    direction = ! direction;
}
if (direction){
    ctx.lineWidth++;
} else {
    ctx.lineWidth--;
}

}

canvas.addEventListener('mousedown',(e) =>{
    isDrawing = true;
    [lastX,lastY] = [e.offsetX,e.offsetY]
});

canvas.addEventListener('mousemove',draw); 
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);