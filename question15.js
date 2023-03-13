"use strict";
// Q : 15
const GuestList2 = [
    {
        name: "Hassnain,",
        invitation: "“I invite you to dinner tonight. I will be very happy if you go.”",
    },
    {
        name: "Ashir,",
        invitation: "“I invite you to dinner tonight. I will be very happy if you go.”",
    },
    {
        name: "Ali,",
        invitation: "“I invite you to dinner tonight. I will be very happy if you go.”",
    },
];
for (let a = 0; a < GuestList2.length; a++) {
    console.log(GuestList2[a].name + " " + GuestList2[a].invitation);
}
//  part 1
const GuestList3 = [
    {
        name: "Hassnain,",
        invitation: "“I invite you to dinner tonight. I will be very happy if you go.”",
    },
    {
        name: "Ashir,",
        invitation: "“I invite you to dinner tonight. I will be very happy if you go.”",
    },
    {
        name: "Ali,",
        invitation: "“I invite you to dinner tonight. I will be very happy if you go.”",
    },
];
for (let a = 0; a < GuestList3.length; a++) {
    if (a === 0) {
        console.log(GuestList3[a].name + "" + GuestList3[a].invitation);
    }
}
// part 2
for (let a = 0; a < GuestList2.length; a++) {
    console.log(GuestList2[a].name + " " + GuestList2[a].invitation);
}
// Part 3
for (let a = 1; a < GuestList3.length; a++) {
    console.log(GuestList3[a].name + "" + GuestList3[a].invitation);
}
