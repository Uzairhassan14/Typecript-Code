// Q : 24

                                                    // Part 1 //
                                                    
//  true
let  fisrt:string = "uzair";
let  Second:string = "uzair";
console.log( fisrt === Second);

//  false
let  fisrt2:string = "uzair";
let  Second2:string = "hassan";
console.log( fisrt2 === Second2);


                                                    // Part 2 //



let first3:string = "UZAIR";
console.log(first3)
let awais = first3.toLocaleLowerCase();
console.log(awais)
// true
console.log(awais == awais)
// false
console.log(awais == first3)


                                                    // Part 3 //

 //Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

 let a:number = 10;
 let b:number = 10;
 let z:number = 5;

 // equalit
 // true
let c = (a == b);
console.log(c)

//false
let c2 = (a == z)
console.log(c)

// inequality
// false
let d = (a != b);
console.log(d)

// true
let d2 = (a != z);
console.log(d2 )

// less than
// fasle
let e = (a < z);
console.log(e)

// true
let e2 = (z < a);
console.log(e2 )


// greater than
// true
let f = (a > z);
console.log(f)

// False
let f2 = (z > a);
console.log(f2 )

// greater than and equal
// true
let g = (a >= z);
console.log(g)

// false
let g2 = (z >= a);
console.log(g2  )


// less than and equal
//false
let h = (a <= z);
console.log(h)

//true
let h2 = (z <= a);
console.log(h2 )


console.log("numarical // End // operators")


                                                    // part 4 //


let age:number = 20;

// condition true && operator
if (age == 20 && age <= 20 ){
    console.log("condition true")

}

// condition false && operator
if (age == 10 && age <= 20 ){
    console.log("condition false")
}


// condition true || operator
if (age == 10 || age <= 20 ){
    console.log("condition true or oprator")

}

// condition false || operator
if (age == 10 || age <= 10 ){
    console.log("condition false or oprator")
}

                                                    // part 5 //

// Test whether an item is in an array
const array: number[] = [1,2,3,4]

// true
console.log(array.includes(1));
// false
console.log(array.includes(5));

                                                    // part 6 //

// Test whether an item is not in an array
const array2: string[] = ["uzair", "hassan", "Ashir"]
// false
console.log(array2.includes("nasir"));
// true
console.log(array2.includes("uzair"));



export{}



