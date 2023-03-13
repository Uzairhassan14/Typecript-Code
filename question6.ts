// Q : 6

let uzair2 = "\t    Danish    \t";
function strip(uzair2:string) {
  return uzair2.replace(/^\s+|\s+$/g, "");
}
console.log(uzair2);
console.log(strip(uzair2));

export{}