// Store the locations in a array. Make sure the array is not in alphabetical order.
const arryLocation = ["japan", "russia", "iraq", "korea", "turkey"];
//Print your array in its original order.
console.log("orignal array:", arryLocation);
//Print your array in alphabetical order without modifying the actual list.
console.log("sorted array", arryLocation.toSorted());
console.log("orginal Array", arryLocation);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reversed order:", arryLocation.toReversed());
console.log("orginal Array", arryLocation);
//Reverse the order of your list. Print the array to show that its order has changed
console.log("reversed order:", arryLocation.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Again reversed order to make it orignal:", arryLocation.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("sorted array in alphabatically-order changed", arryLocation.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("sorted array-order changed in reverse alphabatically:", arryLocation.reverse());
export {};
//
