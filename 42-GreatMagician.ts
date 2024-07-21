// Define the function show_magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the function make_great
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
}

// Create an array of magician's names
const magicians: string[] = ['laraib', 'ayesha', 'amna', 'ali'];

// Modify the array using make_great
make_great(magicians);

// Pass the modified array to the show_magicians function
show_magicians(magicians);