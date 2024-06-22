//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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
for (let x = 0; x < guestlist.length; x++) {
    if (guestlist[x] !== undefined) {
        console.log(`Hi ${guestlist[x]}! You'r invited`);
    }
}
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (let y = 0; y < guestlist.length; y++) {
    delete guestlist[y];
}
console.log(guestlist);
export {};
