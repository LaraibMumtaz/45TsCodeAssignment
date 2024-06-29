// Define the function make_shirt with default parameters
function make_shirt(size = 'L', message = 'I love TypeScript') {
    console.log(`The shirt size is ${size} and it will have the message: "${message}" printed on it.`);
}
// Call the function to make a large shirt with the default message
make_shirt();
// Call the function to make a medium shirt with the default message
make_shirt('M');
// Call the function to make a shirt of any size with a different message
make_shirt('S', 'typescript is awesome!');
export {};
