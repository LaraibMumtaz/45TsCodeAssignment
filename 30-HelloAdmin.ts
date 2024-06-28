// Create an array of usernames
let usernames = ['admin', 'Eric', 'Alice', 'Bob', 'Charlie'];

// Loop through the array of usernames
for (let username of usernames) {
    // Check if the username is 'admin'
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}