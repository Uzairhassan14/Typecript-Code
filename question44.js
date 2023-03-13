"use strict";
// Q : 44
//  First Method 
function wants_sandwich(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
const person = ["sandwich1", "sandwich2", "sandwich3", "sandwich4", "sandwich5", "sandwich6", "sandwich7", "sandwich8", "sandwich9", "sandwich10", "sandwich11", "sandwich12",];
wants_sandwich(person.slice(0, 4));
console.log("-".repeat(30));
wants_sandwich(person.slice(4, 8));
console.log("-".repeat(30));
wants_sandwich(person.slice(8, 12));
// Second method
// function makeSandwich(...items: string[]): void {
//     console.log("Here's your sandwich summary:");
//     console.log("-".repeat(30));
//     if (items.length > 0) {
//       items.forEach((item) => console.log(item));
//     } 
//     console.log("-".repeat(30) + "\n");
//   }
//   // example calls to the function
//   makeSandwich("ham", "cheese", "lettuce");
//   makeSandwich("turkey", "bacon", "avocado", "tomato");
//   makeSandwich("peanut butter", "jelly");
