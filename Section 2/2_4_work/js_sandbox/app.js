// PRIMITVE TYPES

// String
const name = 'Micah Krietemeyer';

// Number
const age = 34;

// Boolean
const hasKids = true;

// Null
const car = null;

// Undefined
let test;

// Symbol
const sym = Symbol();

// console.log(typeof name); // returns string
// console.log(typeof age); // returns number
// console.log(typeof hasKids); // returns boolean
// console.log(typeof car); // returns object - dates back to original implementation of JS
// console.log(typeof test); // returns undefined
// console.log(typeof sym); // returns symbol

//REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
    city: 'Boston',
    state: 'MA'
}
const today = new Date();

console.log(today);
console.log(typeof today);
// all reference types will return as objects