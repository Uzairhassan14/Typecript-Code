// Q : 32

// const current_users:string[] =["ashir", "nasir", "hassnain" , "uzair", "danish"]

// const new_users:string[] = ["hassnain" ,"nasir","faisal", "awais", "yasir"  ]


// for (let i = 0; i < new_users.length; i++) {

//     for (let j = 0; j < current_users.length; j++) {
//         if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
//             console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
//         }else {
//             console.log(`Congratulations! The username '${new_users[i]}' is available.`);
//           }
       
//       }
//   }



// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


const current_users: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const new_users: string[] = ['Charlie', 'Frank', 'Gina', 'Hannah', 'Ivy'];

for (let i = 0; i < new_users.length; i++) {
  let username_exists = false;
  for (let j = 0; j < current_users.length; j++) {
    
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      username_exists = true;
      break;
    }
  }
  if (username_exists) {
    console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${new_users[i]}' is available.`);
  }
}
