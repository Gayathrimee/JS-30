const addItems = document.querySelector('.add_items');
const itemsList = document.querySelector('.plates');
// const items = [];    //initial
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    // console.log('hello');
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    // console.log(this);  //this here is the entire form with class add_items

    const item = {
        // text:'Item Name', (or:) (cuz text is declared above)
        text,                 //is an es6 shorthand property
        done:false           //means by default , it's not going to be checked
    };

    // console.log(item)
    items.push(item)
    populateList(items,itemsList);
    // localStorage.setItem('items', items);   //to set the items in local storage so that it won't get deleted when we refresh the page
    localStorage.setItem('items',JSON.stringify(items));
    this.reset();           //will reset the form again into null when an item is added(+add item)
}

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate,i) => {
        return `
        <li>
            <input type = "checkbox" data-index = ${i} id = "item${i}" 
            ${plate.done ? 'checked' : ''} />  
            <label for = "item${i}"> ${plate.text}</label>
            </li>
            `;
    }).join('');
}

function toggleDone(e){
    if(!e.target.matches('input')) return;  // skip this ulsess it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items,itemsList);

    console.log(e.target);
}

addItems.addEventListener('submit',addItem);
itemsList.addEventListener('click',toggleDone);

populateList(items,itemsList);

// const checkBoxes = document.querySelectorAll('input');
// checkBoxes.forEach(input => input.addEventListener('click', () => alert('hi') ));
