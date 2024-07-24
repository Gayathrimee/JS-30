// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const cities = [];

// const prom = fetch(endpoint);
// console.log(prom)                      //promise

// ...

// fetch(endpoint)
// .then(blob => blob.json())
// .then(data => console.log(data));

//... to set the array into cities
// ... and to findMatches()

// fetch(endpoint)
// .then(blob => blob.json())
// .then(data => cities.push(...data));

// function findMatches(wordTomatch,cities){
//     return cities.filter(place => {

//         // here we need to figure out if the city or state matches what was searched

//         const regex = new RegExp(wordTomatch,'gi');  //regex, g -> global , i -> insensitive
//         return place.city.match(regex) || place.state.match(regex)  //have to match either the city or the state
//     })
// }
// write findMatches('bos',cities); in console -> this will shows the 2 cities starts with bos

// ...to displayMatches()

// fetch(endpoint)
// .then(blob => blob.json())
// .then(data => cities.push(...data));

// function findMatches(wordTomatch,cities){
//     return cities.filter(place => {

//         // here we need to figure out if the city or state matches what was searched

//         const regex = new RegExp(wordTomatch,'gi');  //regex, g -> global , i -> insensitive
//         return place.city.match(regex) || place.state.match(regex)  //have to match either the city or the state
//     })
// }

// function displayMatches(){
//     const MatchArray = findMatches(this.value,cities);
//     console.log(MatchArray);
// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change',displayMatches);
// searchInput.addEventListener('keyup',displayMatches);

// ...
// fetch(endpoint)
// .then(blob => blob.json())
// .then(data => cities.push(...data));

// function findMatches(wordTomatch,cities){
//     return cities.filter(place => {

//         // here we need to figure out if the city or state matches what was searched

//         const regex = new RegExp(wordTomatch,'gi');  //regex, g -> global , i -> insensitive
//         return place.city.match(regex) || place.state.match(regex)  //have to match either the city or the state
//     })
// }

// function displayMatches(){
//     const matchArray = findMatches(this.value,cities);
//     const html = matchArray.map(place => {

//         const regex = new RegExp(this.value, 'gi');

//         const cityName = place.city.replace(regex,`<span class = "h1">
//             ${this.value}</span> `);

//         const stateName = place.state.replace(regex,`<span class = "h1">
//             ${this.value}</span> `)   

//         return `
//         <li>
//         <span class = "name"> ${cityName}, ${stateName}</span>
//         <span class= "population"> ${place.population}</span>
//         </li> `
//     }).join('');
//     suggestions.innerHTML = html;
//     // console.log(MatchArray);
// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change',displayMatches);
// searchInput.addEventListener('keyup',displayMatches);

// ..final - adding symbols like dot,commas

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));

function findMatches(wordTomatch,cities){
    return cities.filter(place => {

        // here we need to figure out if the city or state matches what was searched

        const regex = new RegExp(wordTomatch,'gi');     //regex, g -> global , i -> insensitive
        return place.city.match(regex) || place.state.match(regex)     //have to match either the city or the state
    })
}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function displayMatches(){
    const matchArray = findMatches(this.value,cities);
    const html = matchArray.map(place => {

        const regex = new RegExp(this.value, 'gi');

        const cityName = place.city.replace(regex,`<span class = "h1">
            ${this.value}</span> `);                              //is used to highlight the letters which we write in the form

        const stateName = place.state.replace(regex,`<span class = "h1">
            ${this.value}</span> `)   

        return `
        <li>
        <span class = "name"> ${cityName}, ${stateName}</span>
        <span class= "population"> ${numberWithCommas(place.population)}</span>
        </li> `
    }).join('');
    suggestions.innerHTML = html;
    // console.log(MatchArray);
}

const searchInput = document.querySelector('.search');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);

