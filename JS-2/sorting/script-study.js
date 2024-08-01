const bands = ['The plot in You', 'The Devil Wears Prada',
    'Pierrce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

const sortedBands = bands.sort(function(a,b) {
    if(a>b){
        return 1;
    } else{
        return -1;
    }
})

console.log(sortedBands);

// then we add a fn 
// to erase the 'a', 'the', 'an' from the above array:

function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();

}

// now the sortedBands become:
// the data we use to decide where it goes is not necessarily the data
// is going to be in the array
// so we're using strip now

// the if part becomes

//* strips is a handy method to remove unwanted characters from strings in JS.

const sortedBand = bands.sort(function(a,b) {
    if( strip(a) > strip(b)){
        return 1;
    } else{
        return -1;
    }
})

console.log(sortedBand);
// making it lot easier:


const sortedBan = bands.sort(function(a,b) {
    return strip(a) > strip(b) ? 1 : -1;  //using a ternary operator
})

// making it as arrowing fn

const sortedBa = bands.sort((a,b) => {
    return strip(a) > strip(b) ? 1 : -1;  //using a ternary operator
})

// if the only thing we're doing in a fn is returning something, then we can use the implicit return:

const sortedBandss = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

// now joining the arrays into the ul

document.querySelector('#bands').innerHTML = sortedBands.map(band => 
    `<li> ${band} </li>`).join('');

// it takes the element and sets the innerhtml to be and we could put this on its own line
// sorted bands but we want to map over each of those and then that's going to return an array
// so we want to join it.


// in the end it will print the 'li's in the alphabetical order without considering the 'a,an,the'
