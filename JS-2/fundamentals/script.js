//1. start with strings,numbers and booleans

let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);
// here it prints 100 100 , 200 100
// this is because the value of age goes intot he variable at the the same time

// that works the same way with strings
let name = 'wes';
let name2 = name;
console.log(name,name2);
name = 'wesley';
console.log(name,name2);
// prints out wes wes, wes wesley

// 2. Let's say we have an array
const players = ['wes','sarah','ryan','poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players,team);

// let's do something like this:
team[3] = 'lux';
console.log(team,players);
// both the 4th person of team and players will get updated with lux
// what happened here is: team is not the array. team is just a reference 
// to the original array which is players

// so let's make a copy of the array rather than an actual reference
// let's take the players and just call slice against it. And if we call
const team2 = players.slice();

// or create a new array and concat the old one
const team3 = [].concat(players);
// the term 'concatenate' means to link things together in a series or chain.
// concatenation usually refers to joining strings (sequences of characters) end-to-end

// or let's use spread fn
const team4 = [...players];
team4[3] = 'heeee haaaww';
console.log(team4);

const team5 = Array.from(players)

// eg of concact():
const team6 = team4.concat(players);
console.log(team6);
// this will provide an array of both team4 and player:
// ["wes",'sarah','ryan','hee haw','wes','sarah','ryan','lux/poppy : if lux is not declared']


// with objects:

const person = {
    name: 'Wes Bos',
    age:80
};
console.log(person);

// and think we make a copy:
// const captain = person;
// captain.number = 99;
// it will overwrite the person with number 99

// how do we make a copy instead?

const cap2 = Object.assign({},person,{number:99,age:12});
console.log(cap2);

// we hopefully soon see the object ...spread
const cap3 = {...person}

// Things to note - this is only 1 level deep - both for Arrays and Objects. 
// lodash has a cloneDeep method, but  you should think twice before using it.

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter:'@wesbos',
        facebook: 'wesbos.developer'
    }
}
console.log(wes);

const dev = Object.assign({},wes);
// dev will show same objects as wes.
// also if update dev.name it won't affect the wes.name
// but if change the dev.social.twitter = '@coolman' or something, it will change
// both dev.social.twitter and wes.social.twitter
// becz object.assign will only does one level deep

const dev2 = JSON.parse(JSON.stringify(wes));

// this thing will help to solve the problem in one kind.
// after this, if we change dev.social.twitter = '@coolman', it won't affect the 
// wes.social.twitter
//cuz : here 'JSON.stringify(wes)' it makes the wes into a string,it's no longer an object
// and also when we use parse : JSON.parse(JSON.stringify(wes)) it will turn it back into an
// object and then you get a full copy of it rather than and you shake all the references

//1. 1st stringify(wes) will be executed, i.e it takes the js object and then convert it into 
// a JSON string.
// 2. 2nd JSON(parse()) will be executed, i.e it takes the corresponding JSON string and then converts 
// it into a JS object

// so now, if we change the dev2.social.twitter = '@coolman' it won't affect the wes.social.twitter