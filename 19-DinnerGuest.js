//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestlist = ['ali', 'amna', 'ayesha'];
let NotComingGuest = "amna";
//console.log(NotComingGuest)
let index = guestlist.indexOf(NotComingGuest);
//console.log(index)
let newGuest = "Shophia";
guestlist[index] = newGuest;
console.log(`New list: ${guestlist}`);
//new message to new list of guest
for (let i = 0; i < guestlist.length; i++) {
    console.log(` Hi ${guestlist[i]}! Join us for a delightful dinner this Friday at 7 PM. We can't wait to enjoy good food and great conversation with you!`);
}
//print statement to informing people that you found a bigger dinner table.
console.log(`Alert! Hello Everyone, We just found a bigger dinner table.`);
guestlist.unshift("laraib");
console.log(guestlist);
//new guest to the middle of your array.
let lenghtList = guestlist.length;
let half = lenghtList / 2;
guestlist.splice(half, 0, "Ruby");
//append() function to add one new guest to the end of your list.
function append(a) {
    guestlist.push(a);
    console.log(guestlist);
}
append("Alina");
//new message to new list of guest
for (let i = 0; i < guestlist.length; i++) {
    console.log(` Hi ${guestlist[i]}! Please join us for a delightful dinner this Saturday at 7 PM. We look forward to an evening of good food and wonderful company!`);
}
//invite only two people for dinner
console.log(`we invite only two people for dinner`);
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
let length1 = guestlist.length;
let length3 = length1 - 2;
for (let i = 0; i < length3; i++) {
    console.log(`Hi ${guestlist[i]}! we’re sorry we can’t invite you to dinner. `);
    delete guestlist[i];
}
//console.log(guestlist)
let noofPeople = 0;
for (let x = 0; x < guestlist.length; x++) {
    if (guestlist[x] !== undefined) {
        console.log(`Hi ${guestlist[x]}! You'r invited`);
        noofPeople += 1;
    }
}
//no of people invited
console.log("Total No of People Invited:", noofPeople);
export {};
