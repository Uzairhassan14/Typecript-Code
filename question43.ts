// Q : 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magician_names:string []=["Apollo" , "Blaine" ,"Copperfield" ,"Devant" ]

function  show_magicians(magician_name:string[]) {
    for (let i = 0; i < magician_name.length; i++) {
      console.log(magician_name[i]) 
        
    }
}
function make_great(magician_name:string[]) {
    const new_array:string []=[];
    for (let i = 0; i < magician_name.length; i++) {
        new_array.push(`The Great ${magician_name[i]}`) ;
    }
    return new_array;
}

const original_array =  magician_names.slice();
const new_array = make_great(original_array)

show_magicians(original_array)

show_magicians(new_array)


