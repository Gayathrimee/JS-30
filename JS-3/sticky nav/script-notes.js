// window.scrollY shows the value in which the navbar scrolls through y axis and shows the pixels when it hits the top

if(window.scrollY >= topOfNav){
    document.body.classList.add('fixed-nav');

} else{
    document.body.classList.remove('fixed-nav')
}

// where topOfNav is defined as:
const topOfNav = nav.offsetTop;