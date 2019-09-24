// var, let, const

// var name = 'Micah Krietemeyer';
// console.log(name);
// name = 'Samantha Krietemeyer';
// console.log(name);

// //Init var
// var greeting; //usecase for intialize without a value : because of conditional (if statement)
// console.log(greeting);
// greeting = 'How are ya?'
// console.log(greeting);

// // letters, numbers, _, $
// //Can not start with a number
// var $name = 'Rachel'; // not recommended start with $unless using jQuery
// var _name = 'John'; // not recommended as _ used for private variable

// // Multi word vars
// var firstName = 'Josh'; // Camel case
// var first_name = 'Jen'; // Underscore
// var FirstName = 'Caleb'; // Pascal case, not recommended for reg vars
// var firstname = 'Samer'; // Not recommended

// Ctrl + / comments out selected lines

// LET
// let name;
// name = 'Micah Krietemeyer';
// console.log(name);
// name = 'Samantha Krietemeyer';
// console.log(name);

// CONST - Variable cannot be reassigned
// const name = 'Micah';
// console.log(name);
// // Can not reassign
// name = 'Sarah'; // Error
// // Have to assign a value
// const greeting; // Error

const person = {
    name: 'Micah',
    age: 34
}

person.name = 'Samantha';
person.age = 27;

//console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);

// Recommend: Use const unless value with change, initialize, use in iterator/loop