export {}

// Q : 15
const GuestList2 = [
    {
      name: "Hassnain,",
      invitation:
        "“I invite you to dinner tonight. I will be very happy if you go.”",
    },
    {
      name: "Ashir,",
      invitation:
        "“I invite you to dinner tonight. I will be very happy if you go.”",
    },
    {
      name: "Ali,",
      invitation:
        "“I invite you to dinner tonight. I will be very happy if you go.”",
    },
  ];
  
  for (let a = 0; a < GuestList2.length; a++) {
    console.log(GuestList2[a].name + " " + GuestList2[a].invitation);
  }

  //  part 1
const GuestList3 = [
    {
      name: "Hassnain,",
      invitation:
        "“I invite you to dinner tonight. I will be very happy if you go.”",
    },
    {
      name: "Ashir,",
      invitation:
        "“I invite you to dinner tonight. I will be very happy if you go.”",
    },
    {
      name: "Ali,",
      invitation:
        "“I invite you to dinner tonight. I will be very happy if you go.”",
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
  

const GuestList4 = [
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
      invitation: "“I have got a big table for dinner.”",
    },
    {
      name: "Ali,",
      invitation: "“I have got a big table for dinner.”",
    },
    {
      name: "Awais,",
      invitation: "“I have got a big table for dinner.”",
    },
    {
      name: "Bilal,",
      invitation: "“I have got a big table for dinner.”",
    },
    {
      name: "Waleed,",
      invitation: "“I have got a big table for dinner.”",
    },
  ];
  for (let a = 0; a < GuestList4.length; a++) {
    console.log(GuestList4[a].name + " " + GuestList4[a].invitation);
  }
  
  let appendnewname = {
    name: "lastname,",
    invitation: "“I have got a big table for dinner.” ",
  };
  GuestList4.push(appendnewname);
  
  console.log(GuestList4[a].name + " " + GuestList4[a].invitation);