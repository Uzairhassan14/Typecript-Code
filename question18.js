"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Q : 18
const places = ["Islamabad", "Swat", "NaranKghan", "Kashmir"];
console.log(places);
let alphabaticalOrder = places.slice().sort();
console.log(" alphabatical order", alphabaticalOrder);
console.log("orignal", places);
let reversearry = places.slice().reverse();
console.log("reverse ", reversearry);
console.log("original", places);
let reverseSort = places.slice().sort().reverse();
console.log("reverse original order", reverseSort);
let reverseSort2 = places.slice().sort().reverse().reverse();
console.log("reverse2 original order", reverseSort2);
let sort = places.slice().sort().reverse().reverse().sort();
console.log("sort  order changed", sort);
let sortreverce = places.slice().sort().reverse().reverse().sort().reverse();
console.log("sortreverce", sortreverce);
