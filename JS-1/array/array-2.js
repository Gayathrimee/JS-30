const people = [
    { name: 'wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text:'Love this!', id: 523423 },
    { text:'Super good', id: 823423 },
    { text:'You are the best', id: 2039842 },
    { text:'Ramen is my fav food ever', id: 123523 },
    { text:'Nice Nice Nice!', id: 542328 },
]

// 1. some and every checks
// Array.prototype.some()   // is at least one person 19?

const isAdult = people.some(function(person){
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19){
        return true;
    }
});
console.log({isAdult})

// (or)

const isAdults = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
})
console.log({isAdults})

// (or)

const isAdlt = people.some(person => ((new Date())
    .getFullYear()) - person.year >= 19 );

console.log({isAdlt});

// Array.prototype.every()  // is everyone 19?

const allAdults = people.every(person => ((new Date()).
    getFullYear()) - person.year >= 19);

console.log({allAdults});

// Array.prototype.find()
// find is like filter, but instead returns just theone you are looking for

// ?. find the comment with the ID of 823423

const comment = comments.find(function(comment){
    if(comment.id === 823423){
        return true;
    }
})
console.log(comment);

// (or)

const commnt = comments.find((comment) => comment.id === 823423);
console.log(commnt);

// Array.prototype.findIndex()
// To delete an array, we need to know where in the array it actually is.

// 1. Find the comment with this ID
// 2. delete the comment with the ID of 823423

// Inorder to delete an item from an array we 1st have to find the location of that array

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);
// here this logs out its id or it's place

//  comments.splice(index,1);   // <- instead of this
// :

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];
console.table(comments);
console.table(newComments);
// here we created a new array by deleting the 2nd element from the original array
