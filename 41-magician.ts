// Define the function show_magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
const magicians: string[] = ['laraib', 'ayesha', 'amna', 'ali'];

// Pass the array to the show_magicians function
show_magicians(magicians);