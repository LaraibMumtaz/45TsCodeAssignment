//Tests for equality and inequality with strings
let animal = 'cat';
console.log("Is animal == 'cat'? I predict True.");
console.log(animal == 'cat'); // True
console.log("Is animal != 'dog'? I predict True.");
console.log(animal != 'dog'); // True
console.log("Is animal == 'dog'? I predict False.");
console.log(animal == 'dog'); // False
console.log("Is animal != 'cat'? I predict False.");
console.log(animal != 'cat'); // False
//Tests using the lower case function
let city = 'London';
console.log("Is city.toLowerCase() == 'london'? I predict True.");
console.log(city.toLowerCase() == 'london'); // True
console.log("Is city.toLowerCase() == 'paris'? I predict False.");
console.log(city.toLowerCase() == 'paris'); // False
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age = 25;
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True
console.log("Is age != 30? I predict True.");
console.log(age != 30); // True
console.log("Is age > 20? I predict True.");
console.log(age > 20); // True
console.log("Is age < 30? I predict True.");
console.log(age < 30); // True
console.log("Is age >= 25? I predict True.");
console.log(age >= 25); // True
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False
console.log("Is age < 20? I predict False.");
console.log(age < 20); // False
console.log("Is age >= 30? I predict False.");
console.log(age >= 30); // False
console.log("Is age <= 20? I predict False.");
console.log(age <= 20); // False
//Tests using "and" and "or" operators
let temperature = 75;
let isRaining = false;
console.log("Is temperature > 70 and isRaining == false? I predict True.");
console.log(temperature > 70 && isRaining == false); // True
console.log("Is temperature < 70 or isRaining == false? I predict True.");
console.log(temperature < 70 || isRaining == false); // True
//Test whether an item is in an array
let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("Is 'Banana' in the fruits array? I predict True.");
console.log(fruits.includes("Banana")); // True
console.log("Is 'Grape' in the fruits array? I predict False.");
console.log(fruits.includes("Grape")); // False
//Test whether an item is not in an array
let vegetables = ["Carrot", "Broccoli", "Spinach"];
console.log("Is 'Potato' not in the vegetables array? I predict True.");
console.log(!vegetables.includes("Potato")); // True
console.log("Is 'Carrot' not in the vegetables array? I predict False.");
console.log(!vegetables.includes("Carrot")); // False
export {};
