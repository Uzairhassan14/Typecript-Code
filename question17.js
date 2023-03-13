"use strict";
// Q : 17
const GuestList5 = [
    {
        name: "kamran,",
        invitation: "“I have got a big table for dinner.”",
    },
    {
        name: "Hassnain,",
        invitation: "“I have got a big table for dinner.”",
    },
    {
        name: "Ashir,",
        invitation: "“ I'm sorry I can't invite you to dinner ”",
    },
    {
        name: "Ali,",
        invitation: "“ I'm sorry I can't invite you to dinner ”",
    },
    {
        name: "Awais,",
        invitation: "“ I'm sorry I can't invite you to dinner ”",
    },
    {
        name: "Bilal,",
        invitation: "“ I'm sorry I can't invite you to dinner ”",
    },
    {
        name: "Waleed,",
        invitation: "“ I'm sorry I can't invite you to dinner ”",
    },
];
for (let a = 0; a < GuestList5.length; a++) {
    console.log(GuestList5[a].name + " " + GuestList5[a].invitation);
}
let appendnewname = {
    name: "lastname,",
    invitation: "“ I'm sorry I can't invite you to dinner ” ",
};
GuestList5.push(appendnewname);
console.log(GuestList5);
for (let i = 0; i <= GuestList5.length - 7; i++) {
    console.log(GuestList5[i].name + " " + GuestList5[i].invitation);
}
for (let i = 2; i < GuestList5.length; i++) {
    console.log(GuestList5[i].name + " " + GuestList5[i].invitation);
}
for (let i = 0; i <= GuestList5.length - 7; i++) {
    console.log(GuestList5[i].name + "You're still invited ");
}
for (let i = 0; i <= GuestList5.length - 7; i++) {
    GuestList5.pop();
    GuestList5.pop();
    console.log("No space for the dinner");
}
