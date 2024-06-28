// Store the numbers 1 through 9 in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Determine the ordinal suffix based on the number
    let ordinalSuffix;
    if (number === 1) {
        ordinalSuffix = 'st';
    } else if (number === 2) {
        ordinalSuffix = 'nd';
    } else if (number === 3) {
        ordinalSuffix = 'rd';
    } else {
        ordinalSuffix = 'th';
    }

    // Print the number with its ordinal suffix
    console.log(`${number}${ordinalSuffix}`);
}