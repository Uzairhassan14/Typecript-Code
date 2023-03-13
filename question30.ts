// Q : 30

const person_names: string[] = ["admin", "Adeel", "faizan", "Danish", "Amir"];

for (var i = 0; i < person_names.length; i++) {
  if (person_names[i] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${person_names[i]}, thank you for logging in again.`);
  }
}
