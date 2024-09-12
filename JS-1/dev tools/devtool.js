const dogs = [
    { name: 'Snickers', age: 2},
    { name: 'hugo', age: 8}
];

function makeGreen(){
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// regular
console.log('hello');

// interpolated
console.log('hello I am a %s string', '😊')

// styled
console.log('%cI am some great text',
    'font-size: 42px; background: black; text-shadow: 4px 3px 3px white; color:white; '
);

// warning!
console.warn('Oh Nooooooo!😯');
console.warn('Oh Nooooooo!🥺');


// Error :!
console.error('Shit!😶');
console.error('Shit!🥱');
console.error('Shit!🥺');

// info
console.info('Crocodiles eat 3-4 people per year');

// Testing
console.assert(1 === 2, 'That\'s is wrong!🙊');
// if we want to grab a paragraph on the page
const p = document.querySelector('p');
console.log(p.classList.contains('ouch'), 'That is 🐒 Wrong!🗡');


// clearing
console.clear();

// viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// grouping together

dogs.forEach(dog => {
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old `);
    console.log(`${dog.name} is ${dog.age * 7} dog years old `);
})
// if we have more stuffs like this, to group eadh together

dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old `);
    console.log(`${dog.name} is ${dog.age * 7} dog years old `);
    console.groupEnd(`${dog.name}`)
})
// if we think it also as little bit messy


dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old `);
    console.log(`${dog.name} is ${dog.age * 7} dog years old `);
    console.groupEnd(`${dog.name}`)
})
// 🐏

// counting

console.count('wes');
console.count('steve');
console.count('steve');
console.count('wes');
console.count('steve');
console.count('wes');
console.count('wes');
console.count('wes');
console.count('steve');
console.count('steve');
console.count('wes');
console.count('steve');
console.count('wes');
console.count('wes');
console.count('steve');
console.count('steve');

// timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});
console.table(dogs);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                