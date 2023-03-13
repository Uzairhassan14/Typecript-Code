// Q : 42
function show_magicians(magician_names:string[]) {
    for (let i = 0; i < magician_names.length; i++) {
       console.log(magician_names[i]) 
        
    }
}

const magician_names:string []=["Apollo" , "Blaine" ,"Copperfield" ,"Devant" ]



function make_great(magician_name:string[]) {
    for (let i = 0; i < magician_name.length; i++) {
        console.log(`Great to ${magician_name[i]}`) 
        
    }
}
const magician_name:string []=["Apollo" , "Blaine" ,"Copperfield" ,"Devant" ]

make_great(magician_name)
show_magicians(magician_names)

export{}

