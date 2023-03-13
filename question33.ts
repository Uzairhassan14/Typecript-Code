// Q : 33
// first method 
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < numbers.length; index++) {
  let num:number = numbers[index];
  let ordinal: string;
  if (num === 1) {
    ordinal = "1st";
  } else  if (num === 2) {
    ordinal = "2nd";
  } else  if (num === 3) {
    ordinal = "3rd";
  } else {
    ordinal = num  + "th";
  }
  console.log(ordinal);
}


// Second method
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let index = 0; index < numbers.length; index++) {
//   let num:number = numbers[index];
//   let ordinal: string;
//   if (num === 1) {
//     console.log(ordinal = "1st") ;
//   } else  if (num === 2) {
//     console.log(ordinal = "2nd") ;
//   } else  if (num === 3) {
//     console.log(ordinal = "3rd") ;
//   } else {
//     ordinal = num  + "th";
//     console.log(ordinal);
//   }
// }