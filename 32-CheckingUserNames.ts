// List of current usernames (case insensitive)
let current_users = ['Alice', 'laraib', 'ali', 'amna', 'Eve'];

// List of new usernames to check
let new_users = ['Alice', 'Ruby', 'Attiya', 'aqsa', 'eve'];

// Loop through new_users list
for (let i = 0; i < new_users.length; i++) {
    // Get the current new username and convert to lowercase
    let newUser = new_users[i];
    let newUserLower = newUser.toLowerCase();

    // Flag to check if username exists
    let usernameExists = false;

    // Loop through current_users list
    for (let j = 0; j < current_users.length; j++) {
        // Get the current current username and convert to lowercase
        let currentUser = current_users[j];
        let currentUserLower = currentUser.toLowerCase();

        // Check if newUserLower matches currentUserLower
        if (newUserLower === currentUserLower) {
            usernameExists = true;
            break; // Exit the loop early if match found
        }
    }

    // Output message based on username existence
    if (usernameExists) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations, the username '${newUser}' is available!`);
    }
}
