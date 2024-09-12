const inputs = document.querySelectorAll('.controls input')

function handleUpdate(){
    const suffix = this.dataset.sizing || " ";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

    // handleupdate: This is a fn that updates CSS variables based on the value of the input element

    // const suffix = ... " "  : this.dataset.sizing retrieves a custom data-sizing attribute from the input element. 
    // if the attribute is not present, it defaults to an empty space " ".
    
    // document... : this line sets a css variable (--${this.name}) on the root element(document.documentelement). 
    // The css variable's value is the current value of the input element plus the suffix
}

inputs.forEach(input => input.addEventListener('change',handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

// 'change' : this event triggers when the user changes the value of the input and then moves the focus away from the input
//            It handles when the input value is finalized by the user, such as when they release the mouse or tab out of the input field.

// 'mousemove' : This event triggers when the user moves the mouse while interacting with the input 
//              Handles real-time updates as the user drags or adjusts the slider. Without this event, you would only see changes after the input loses focus,
//              which is not ideal for intercative sliders or controls where you want to see changes immediately.