// Define the function show_magicians
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define the function make_great
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
}
// Create an array of magician's names
const magicians = ['laraib', 'ayesha', 'amna', 'ali'];
// Modify the array using make_great
make_great(magicians);
// Pass the modified array to the show_magicians function
show_magicians(magicians);
export {};
