// const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');
// console.log(checkboxes);

// function handleCheck(e){
//     console.log(e);
// }
// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// // my creation to make 
// const paragraph = document.querySelectorAll('p');
// console.log(paragraph);

// function lineThrough(e){
//     console.log(e);
//     this.classList.toggle('lineThrough')
// }
// paragraph.forEach(p => p.addEventListener('click', lineThrough));

// you did something great dear. when you click on the writings there will comes a linethrough the text.
// not that we want really, but that's okay. You did a great job

// now let's do the original one:

const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');
let lastChecked;

function handleCheck(e){
    // check if they had the shift key down
    // and check that they are checking it
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        //go ahead and do what we please


        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox == this || checkbox === lastChecked){
                inBetween = !inBetween;
                console.log('Starting to check them inbetween!');
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
    // console.log(e);
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// const inBox = document.querySelector('inbox')

// function lineThrough(){
//     this.classList.toggle('lineThrough');
// }
// inBox.forEach(inbox => inbox.addEventListener('click',lineThrough))