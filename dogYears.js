// The variable below store my current age 
const myAge = 26;

// The variable below stores the dog age of 2  
let earlyYears = 2;

earlyYears *= 10.5;

// The variable below store my current age - 2
let laterYears = myAge - 2;

// The variable below stores number of dog years accounted for by your later years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// The variable below store my age in dog years
let myAgeInDogYears = earlyYears + laterYears 

// The variable below stores my name in lowercase
let myName = 'David'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)