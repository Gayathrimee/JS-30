const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed:1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed:1727},
    {first: 'Galileo', last: 'Galili', year: 1564, passed:1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed:1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed:1630},
    {first: 'Nicolas', last: 'Copernicus', year: 1473, passed:1543},
    {first: 'Max', last: 'Planck', year: 1858, passed:1947},
];

const people = ['Beck,Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
    'Beecher, Henry','Beethoven, Ludwig','Begin, Menachem','Belloc, Hilaire','Bellow, Saul',
    'Benchley,Robert','Beneson, Peter','Ben-Gurion, David','Benjamin, Walter',
    'Benn,Tony','Bennington, Chester','Benson, Leana','Bent, Silas','Bentson, Lloyd',
    'Berger, Ric','Bergman, Ingmar','Berio, Luciano','Berle, Milton','Berlin, Irvin','Berne, Eric',
    'Bernhard, Sandra','Berra, Yogi','Berry, Halle','Berry, Wendell','Bethea, Erin','Bevan, Aneurin',
    'Bevel, Ken','Biden, Joseph','Bierce, Ambrose','Biko, Steve','Billings, Josh','Biondo, Frank',
    'Birrell, Augustine','Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
];

// Array.prototype.filter()

// 1. Filter the list of inventors for those who were born in 1500's


const output = inventors.filter((inventors) => {
    if (inventors.year >= 1500 && inventors.year < 1600){
        return true;    // keep it!
    } else{
        return false;
    }
})
console.table(output);

// (or)

const outpt =  inventors.filter((inventors) => 
    (inventors.year >= 1500 && inventors.year< 1600));
console.table(outpt);

// Array.prototype.map()

// 2. Give us an array of the inventory first and last names

const fullNames = inventors.map((inventors) => inventors.first + " " + inventors.last );
console.table(fullNames);

//  (or)


const fullName = inventors.map((inventors) => `${inventors.first} ${inventors.last}` );
console.table(fullName);

// Array.prototype.sort()

// 3. Sort the inventors by birthdates,oldest to youngest

const ordered = inventors.sort(function(a,b){
    if(a.year > b.year){
        return 1;
    } else {
        return -1;
    }
});
console.table(ordered);

// (or)

const orderd = inventors.sort((a,b) => a.year < b.year);
console.table(orderd);

// (or)

const ordrd = inventors.sort((a,b) => a.year < b.year ? 1 : -1);
console.table(ordrd);

// Array.prototype.reduce()

// 4. How many years did all the inventors live?

var totalYears = 0;

for( var i = 0; i < inventors.length; i++ ){
    totalYears += inventors[i].year
}
console.log(totalYears);

// or()

const totalYear = inventors.reduce((total,inventor) => {
    return total + (inventor.passed - inventor.year);
},0)
console.table(totalYear);

// 5. Sort the inventors lived by years

const oldest = inventors.sort(function (a,b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    if( lastGuy > nextGuy){
        return -1;
    } else {
        return 1;
    }
})
console.table(oldest);

// (or)

const older = inventors.sort(function(a,b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    return lastGuy > nextGuy ? -1 : 1;
});
console.table(older);

//  6. create a list of Boulevards in Pais that contain 'de' anywhere in the name 
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes)('de');

//7. sort Exercise
// sort the people alphabetically by last name

const alpha = people.sort(function(lastOne,nextOne){
    const parts = lastOne.split(', ');
    console.log(parts);
});
// this will print as array
// so / (or)

const beta = people.sort(function(lastOne,nextOne){
    const [last,first] = lastOne.split(', ');
    console.log(last,first);
});
// now we have to work with variables

const gama = people.sort((lastOne,nextOne) => {
    const [aLast,aFirst] = lastOne.split(', ');
    const [bLast,bFirst] = nextOne.split(', ');
    return aLast > bLast ? -1 : 1;
});
console.log(gama)

// 8. Reduce Exercise
// sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
                'walk', 'car', 'van', 'car', 'truck', 'cycle'];

const transport = data.reduce(function (obj,item){
    console.log(item);
    return obj;
},{})

// (or)

const transportation = data.reduce((obj,item) => {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
},{});
console.log(transportation);
