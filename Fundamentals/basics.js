//Enabling new javascript functionality
"use strict"

/*
--- Defining variables ---
*/
let message = 'Hello'; //let is the new way
var message1 = 'Hello'; //var is the old way and create all variables at function start (bad point)
const message2 = 'Hello'; //Same as let but you cannot modify it

/*
--- Dynamically typed ---
*/
//You can change the variable type dynamically
message = 123;
message = 12.3;
message = true;
message = null; // unknown values
message = undefined; //unassigned values

/*
-- String ---
*/
let first = "Pedro";
let last = 'Calle';
console.log(`Your name is ${first + " " + last}`); //Backticks to use expression and wrapping strings

/*
--- Conversions
*/
let value = true;
value = String(value);

value = "123";
value = Number(value);

value = Boolean(1); //True
value = Boolean(0); //False
value = Boolean("Hello"); //True
value = Boolean(""); //False

/*
--- Comparison ---
*/
value = '2' > 1; // true, string '2' becomes a number 2
value = '01' == 1; // true, string '01' becomes a number 1
value = true == 1; // true
value = true === 1; // false, === operator doesn't allow type conversion
value = null === undefined; //false
value = null == undefined; //true

/*
--- Conditional operators
*/
let accessAllowed = (age > 18) ? true : false;
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

/*
--- Functions ---
*/
let userName = 'John';

function showMessage() {
    let message = 'Hello, ' + userName; //Using global variable
    return message;
}

function showMessage(from, text= "no text given") { // arguments: from, text with default value
    return from + ': ' + text;
}

function sayHi() {   // (1) create
    console.log( "Hello" );
    }

let func = sayHi;
let func1 = function(){
    console.log("Hello");
};
func(); // Hello
func1(); //Hello, it's the same

// Function Declaration
function sum(a, b) {
    return a + b;
  }
// Function Expression
let sum = function(a, b) {
    return a + b;
  };
//Arrow expression
let sum = (a, b) => a + b;
let double = n => n * 2;

//Document a function
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
    return x ** n;
  }