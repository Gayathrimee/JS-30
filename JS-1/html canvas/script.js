const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

    // hsl : hue, saturation, lightness
    // it is a color model used in web design and graphic design to define colors in a way that is often 
    // more intuitive than RGB. 

    // 1. hue: 
    //defintion: hue represents the color type and is the angle on the color wheel. It is measured in degress from 0 to 360
    // values: * 0deg (or 360deg) is red    * 120deg is green   * 240deg is blue * The full circle covers all possible hues.

    // 2. saturation:
    // defintion: Saturation describes the instensity or purity of the color. It represents how much the color deviates from a pure hue.
    // values: * 0% is completely unsaturated(gray)     * 100% is fully saturated(pure color)

    // 3. Lightness
    // definition: Lightness represents the brightness of the color,ranging from black to white.
    // values: * 0% is completely dark(black)   * 100% is completely light(white) * 50% is the pure hue without any added white or black


    ctx.beginPath()
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()

    // [lastX,lastY] = [e.offsetX, e.offsetY]
    lastX = e.offsetX
    lastY = e.offsetY

    hue++

    if(hue >= 360){
        hue = 0
    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction
    }
    if(direction){
        ctx.lineWidth++
    } else{
        ctx.lineWidth--
    }
}
  
canvas.addEventListener('mousedown',(e) =>{
    isDrawing = true
    [lastX, lastY] = [e.offsetX, e.offsetY]
})

canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mousedown', ()=> isDrawing = true)
canvas.addEventListener('mouseup', ()=> isDrawing = false)
canvas.addEventListener('mouseout', ()=> isDrawing = false)