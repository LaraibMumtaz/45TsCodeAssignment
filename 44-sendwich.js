// Define the function make_sandwich that accepts a variable number of items
function make_sandwich(...items) {
    console.log('Sandwich with the following items:');
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log('\n'); // Add a new line for readability between orders
}
// Call the function three times with a different number of arguments each time
make_sandwich('lettuce', 'tomato', 'cheese');
make_sandwich('ham', 'mustard', 'pickles', 'lettuce', 'tomato');
make_sandwich('turkey', 'bacon', 'avocado');
export {};
