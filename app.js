/*Q + A
1. How do we assign a value to a variable? assignment operation "="
2. How do we change the value of a variable? declare the varible and use the assignment operator
to reassign. 
3. How do we assign an existing variable to a new variable? create a new variable and put the old
variable in the new variable. 
4. Remind me, what are declare, assign, and define? 
Declare: name the variable. For example, let and const says we're going to name this variable
Assign: give the variable a value
Define: Give properties? 
5. What is pseudocoding and why should you do it? Pseudocode are written out logical statements that should inform how to write code. 
    -It is not language specific
    - Simplified programming language
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
Depends. Am I crying yet? 
*/

// STRINGS 
let firstVariable = 'Hello World!';//1 & 2
console.log (firstVariable);
firstVariable = 10;//3
console.log(firstVariable);
let secondVariable = firstVariable;//4
console.log(secondVariable);
secondVariable = 'string baby!'//5
console.log(secondVariable);
let yourName = 'Lorivie'//6
console.log("Hello, my name is " + yourName + ".");//7
//BOOLEANS
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false&&false&&false&&false&&false||true);
console.log(!(false&&false));
console.log(e=='Kevin');
console.log(a*b>c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a+a<d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48=='48');

//the Farm
let animal = 'fox';
if (animal==='fox') {
    console.log('Ringdingdingdingdingeringeding')
} else {
    console.log("Hey! You're not a cow.")
};



// //Driver's Ed

//LOOPS
// for (let i = 0; i > 11; i++) {
// console.log(i) 
// }

// for (let i=10; i<=400; i++) {
//     console.log (i)
// }

//The Basics

//Get Even
// for (let i = 1; i < 101; i++) {
//     if (i % 2 == 0) {
//         console.log(`found a ${i} high five`)
//     }
// }

//Give Me 5

//Savings Account



//ARRAYS & CONTROL FLOW



