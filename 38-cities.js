// Define the function describe_city with a default country parameter
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city('Karachi'); // Uses default country
describe_city('Lahore'); // Uses default country
describe_city('New York', 'USA'); // Specifies a different country
export {};
