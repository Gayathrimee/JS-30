// const inputs = document.querySelectorAll('.controls input');

// function handleUpdate(){
//     console.log(this.value)
// }

// inputs.forEach( input => input.addEventListener('change',handleUpdate));  // it doesn't change if drag with the mouse. so
// inputs.forEach( input => input.addEventListener('mousemove',handleUpdate));  //so we added the mousemove also as the event

// ... using the suffix(data-sizing) from the html

// const inputs = document.querySelectorAll('.controls input');

// function handleUpdate(){
//     const suffix = this.dataset.sizing || " ";
//     console.log(suffix);
//     // console.log(this.name)
//     // console.log(this.dataset)
// }

// inputs.forEach( input => input.addEventListener('change',handleUpdate));  // it doesn't change if drag with the mouse. so
// inputs.forEach( input => input.addEventListener('mousemove',handleUpdate));

// ... now adding the property into the picture:

const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || " ";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach( input => input.addEventListener('change',handleUpdate));  // it doesn't change if drag with the mouse. so
inputs.forEach( input => input.addEventListener('mousemove',handleUpdate));
 