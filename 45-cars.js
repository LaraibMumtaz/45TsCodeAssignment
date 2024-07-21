// Define the function that stores information about a car in an object
function create_car(manufacturer, model_name, ...options) {
    // Initialize the car object with required properties
    let car = {
        manufacturer: manufacturer,
        model_name: model_name,
    };
    // Add additional properties from options
    for (let option of options) {
        for (let key in option) {
            car[key] = option[key];
        }
    }
    return car;
}
// Call the function with required information and two additional name-value pairs
const car1 = create_car('Toyota', 'Corolla', { color: 'blue' }, { feature: 'sunroof' });
const car2 = create_car('Honda', 'Civic', { color: 'red' }, { feature: 'leather seats' });
const car3 = create_car('Ford', 'Mustang', { color: 'black' }, { feature: 'convertible' });
// Print the resulting car objects to ensure all information is stored correctly
console.log(car1);
console.log(car2);
console.log(car3);
export {};
