const bands = ['The plot in You', 'The Devil Wears Prada',
    'Pierrce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// to erase the 'a', 'the', 'an' from the above array:

function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();

}

const sortedBands = bands.sort((a,b) => strip(a)> strip(b) ? 1 : -1);

console.log(sortedBands);

// adding the arrays as 'li' into the page:

document.querySelector('#bands').innerHTML = 
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');
