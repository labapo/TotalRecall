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
Depends. 80/20 rule 80% thinking and 20% is the coding part
*/

// STRINGS 
let firstVariable = 'Hello World!';//1 & 2
console.log (firstVariable);
firstVariable = 1;//3
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
    console.log("Hey! You're not a fox.")
};

//Ying's method: Ternary Operator use this method next time: Another way to do an if else statement
// let animal = "cow";
// let isCow = animal == "cow" ? "mooo": "Hey! You're not a cow"; 
// console.log(isCow);
// animal = "dog"; 

//Ariel's method function: 
// let animal = "cow";

// const moo = (cow) => {
//     return cow.toLowerCase () === "cow"? "mooooo" : "Hey, that's not a cow!"
// }
// console.log(moo(animal));

//Driver's Ed
function testAge(age) {
    let driversAge = "";
    if (age >= 16) {
        console.log("Here are the keys!")
    } else {
        console.log("Sorry buddy, you're too young!")
    }
}
testAge(22);

//Ariel's solution as a function
// let age = 18
// const driversAge = (age) => {
//     return age >= 16? "Here are the keys" : "Sorry, you're too young";
// }
// console.log(driversAge(age));


//LOOPS

//A: The Basics
//#1
for (let i = 0; i < 11; i++) {
console.log(i) 
};
//#2
for (let i = 10; i < 401; i++) {
    console.log(i);
};
//#3
for (let i = 12; i < 4001; i+=3) {
    console.log(i);
};

//Ariel's solution: Funtion
// const countToTen = () => {
//     for (let i=1; i<= 10; i ++){
//         console.log(i)
//     }
// }
// countToTen();

//B. Get Even
for (let i = 1; i < 101; i++) {
    if (i % 2===0) {
        console.log(i +"<-- is an even number");
    } else {
        console.log(i);
    }
}

//Give Me 5
for (let i=0; i < 101; i++) {
    if (i % 5==0) {
        console.log("I found a "+ i + ". High Five!");
    } else if (i % 3 ==0) {
        console.log("I found a " + i + ". Three is a crowd.");
    } else if (i % 3==0 && i % 5===0) {
        (console.log("I found a " + i + ". Three is a crowd. High Five!"))
    } else {
      console.log (i)
    }
    };

//Savings Account
let deposit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let bankAccount = 0;
for (i = 0; i < deposit.length; i++) {
    bankAccount+= deposit[i]
}
console.log(bankAccount);

//Tiandre's method: 
// let totalAccount=[1,2,3,4,5,6,7,8,9,10];
// bankAccount=0;
// totalAccount.forEach(element => {
//   bankAccount+=element
// });
// console.log(bankAccount)

//ARRAYS & CONTROL FLOW

//A - Talk about it: 
//1. What are the things in an array called? Elements
//2. Do Arrays guarantee those things will be in order? Yes
//3. What real-life thing could you model with an array? Anything that can be liste, such as a shopping list. 

//B - Easy Does it
let quotes = ["Fear is the mind killer", "Religion is the opium of the masses", "Without music, life would be a mistake"]
console.log(quotes);

//C - Accessing Elements
const randomThings = [1, 10, "Hello", true]; 

//1. How do you access the 1st element in the array? The first element in an array is 0. 
randomThings[0];
console.log(randomThings[0]);
//2. Change the value of "hello to "world"
//randomThings.splice(2, "world");
randomThings[2] = "world";
console.log(randomThings);

//D- Change values 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//1. What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
//2. Change the value of "Github" to "Octocat"
ourClass.splice(4, "Octocat");
console.log(ourClass);
//3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

//E - Mix it up
const myArray = [5, 10, 500, 20]; 
//1. Add "Aegon" and another string to the end
myArray.push("Aegon", "Viserys");
console.log(myArray);
//2. Remove the 5 from the beginning
myArray.shift();
console.log(myArray);
//3. Add "Bob Marley" to the beginning
myArray.unshift("Bob Marley");
console.log(myArray);
//4. Remove string of choice from the end
myArray.pop();
console.log(myArray);
//5. Reverse array
myArray.reverse();
console.log(myArray);
//Did you mutate the array? Yes
//What does mutate mean? To change the original array
/*Did the .reverse()method return anything? 
Returned the array where the last element became first and the first element became last*/

//F Biggie Smalls
let num1 = 0;
if (num1 < 100) {
    console.log("Little Number");
} else if (num1 >= 100) {
    console.log("Big Number");
}

//G - Monkey in the Middle
let num2 = 2;
const bigOrLittleNumber = (num2) => {
if (num2 < 5) {
    console.log("Little number");
} else if (num2 > 10) {
    console.log("Big number");
} else {
    console.log("monkey");
}
};

//H - What's in your closet? 
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  //1
  //console.log( "Kristyn is rocking that " + kristynsCloset[2] + " today!")
  console.log(`She's rocking a ${kristynsCloset[2]} today!`);
  //2 
  kristynsCloset.splice(6,0, "raybans");
  console.log(kristynsCloset);
  //3 
  kristynsCloset.splice(5,1,"Stained knit hat");
  //Another way
  //kristynsCloset[5]= "Stained knit hat";
  console.log(kristynsCloset);
  //4
  console.log(thomsCloset[0][0]);
  //5
  console.log(thomsCloset[1][1]);
  //6
  console.log(thomsCloset[2][2]);
  //7
console.log("Thom is looking firece in a "  + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][1] + ".");
//8 - COME BACK TO THIS. did not work properly
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset);
  
//Functions

//A- pringGreeting
const printGreeting = function (name) {
    console.log("Hello there, " + name + "!")
}
printGreeting("Lori");

//B- printCool
const printCool = function (name) {
    console.log(name + " is cool!");
}
printCool("Lori")

//C- cube
function calculateCube(num){
    console.log(num ** 3);
}
calculateCube(5);

//D - isVowel
function isVowel (character) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let input = character.toLowerCase();
    if (vowels.includes(input)) {
        return true;
    } else {
        return false;
    }
}
console.log(isVowel('y'));

// //will's solutions
// function is_Vowel(x){
//     if(x =="A"|| x == "E"|| x == "I" || x == "O" || x == "U"){
//         result = true;
//     }
//     else{
//         result = false;
//     }
// return result


//Nhan's solution
// function isVowel(charater){
        
//     let AEIOU = ["a","e","i","o","u"];
//     //store the argument inside The Input
//     let  input = charater.toLowerCase();
//     //check the condition if the array is contain the element that is converted to lowercase
//      if (AEIOU.includes(input)=== true){
//          return true;
//        } else{
//      return false;
//       }
//      }
//  console.log(isVowel('a'));

//E - getTwoLengths

function getTwoLengths (input1, input2) {
    let array1 = [input1.length, input2.length];
    return [array1];
    console.log(array1);
}
console.log(getTwoLengths ('hank', 'Hippopopalous'));

//G: maxOfThree
function maxOfThree(num1,num2,num3){
    if (num1 >= num2 && num1 >=num3){
         if (num1 === num2 && num1 > num3) { 
            return num1;
        } else if(num1 === num3 && num1 > num2 ){
            return num1;
         }else if (num1 > num2 && num1 > num3){
            return num1;
        } else if (num1 === num2 && num1 === num3) {
            return "Both are equal"
        }
    } else if(num2 >= num1 && num2 >= num3){
          if (num2 === num3 && num2 >num1 ){
            return num2;
          } else if(num2> num1 && num2 >num3){
            return num2;
          }
    } else if(num3 > num1 && num3 > num2){
      return num3;
    }
}
console.log(maxOfThree(22, 3, 15));

// // function maxOfThree (arg1, arg2, arg3) {
// //     let maxNumber = (Math.max(arg1, arg2, arg3));
// //     if (maxNumber) {
// //         return maxNumber;
// //         console.log(maxNumber);
// //     }
// // }
// // console.log(maxOfThree(6, 17, 12));

// //H - printLongestWord


function printLongestWord(words){
    let longestWord = words[0];
    for(let i = 1; i < words.length; i++){
        if(words[i].length > longestWord.length) {longestWord = words[i];
    }}
    return longestWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// //Objects

// //A - Make a user object
const user = {
    name: "lori", 
    email: "lori@lori.com", 
    age: 12,
    purchased : []
}
// //B - Update the user
user.email = 'labapo@gmail.com';
console.log(user.email);
user.age ++;

// //C - Adding keys and values
user.location = [];
console.log(user);

// // //D - Adding keys and values
user.purchased.push("carbohydrates");
console.log(user.purchased);
user.purchased.push("peace of mind");
console.log(user.purchased);
user.purchased.push("Merino jodhpurs");
console.log(user.purchased);
user.purchased.push("Merino jodhpurs");
console.log(user.purchased);

//E - Object-within-object
user.friend = {
    name: "Aragon", 
    age: 87,
    location: "Gondor",
    purchased: []
}
console.log(user.friend.name);//2
console.log(user.friend.location);//3
user.friend.age = 55 //4
console.log(user.friend.age); //4print
user.friend.purchased.push("The One Ring");//5
console.log(user.friend.purchased);//5print
user.friend.purchased.push("A Latte");//5
console.log(user.friend.purchased);//5print

//F - Loops
for (let i = 0; i < user.purchased; i++){
    console.log(user.purchased)
}
console.log(user.purchased);

for (let i = 0; i < user.friend.purchased; i++){
    console.log(user.friend.purchased)
}
console.log(user.friend.purchased);

//G - Functions can operate on objects
function updateUser() {
    user.age ++;
    user.name = user.name.toUpperCase;
}

//old and loud
function oldAndLoud (person) {
    person.age ++;
    person.name = person.name.toUpperCase;
}
// const oldAndLoud = (person) => {
//     person.age += 1;
//     person.name = person.name.toUpperCase();
//     console.log (person);
// }
// oldAndLoud(user);