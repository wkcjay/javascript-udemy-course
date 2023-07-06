/*
// Linking a JavaScript File
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

console.log(40+8+23-10);

// Value and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// Data Type
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true); // console will show boolean
console.log(typeof javascriptIsFun); // console will show boolean
console.log(typeof 23); // console will show number
console.log(typeof 'Jonas'); // console will show string

javascriptIsFun = 'YES!';
console.log(javascriptIsFun); // console will show string since it is reassigned

let year;
console.log(year);
console.log(typeof year); // console will show undefined as nothing was assigned to variable

year = 1991;
console.log(typeof year); // since the variable is reassigned, console will show number

console.log(typeof null); // console will show object since null is an object

// let, const and var
let age = 30;
age = 31; // age will be reassigned from 30 to 31

const birthYear = 1991;
birthYear = 1990; // console will show uncaught TypeError: Assignment to constant variable, basically you are not allowed to reassign to any constant

const job; // console will show uncaught SyntaxError: Missing intializer in const decalaration, basically you are required to assign value to the constant

var job = 'programmer'; // it is not mandatory to declare variable in javascript, however it is a good practice to always declare variable
job = 'teacher';

lastName = 'Schmedtmann'; // technically you can just declare variable like this, however it is not a good idea as JS will create a property on the global object
console.log(lastName);

// Basic Operators
const now = 2023;
const ageJonas = now-1991;
const ageSarah = now-2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 **3);
// 2 **3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName); // console will show Jonas Schmedtmann

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 15 + 10 = 25
x *= 4; // x = x * 4 = 25 * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 10); // console will show bool;

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); // JS has a precedent procedure for operators


const now = 2022;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
let x, y;
x = y = 25-10-5; // x = y = 10
console.log(x,y); // both will become 10

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);

// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + firstName + ', a' + (year-birthYear) + ' year old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

// Taking Decisions: if/else Statements
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
