// Define the function show_magicians
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define the function make_great that returns a new array
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(magician + ' the Great');
    }
    return great_magicians;
}
// Create an array of magician's names
const magicians = ['laraib', 'ayesha', 'amna', 'ali'];
// Create a new array with "the Great" added to each magician's name
const great_magicians = make_great([...magicians]);
// Pass the original array to the show_magicians function
console.log('Original Magicians:');
show_magicians(magicians);
// Pass the modified array to the show_magicians function
console.log('\nGreat Magicians:');
show_magicians(great_magicians);
export {};
