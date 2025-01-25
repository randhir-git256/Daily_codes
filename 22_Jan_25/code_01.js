// Find the total leap year between the 1900 to 2025 also print that years

let LeapYears = [];
let startYear = 1932;
let endYear = 2025;

for (let year = startYear; year <= endYear; year++) {
    if (year % 4 === 0) {
        if (year % 100 !== 0 || year % 400 === 0) {
            LeapYears[LeapYears.length] = year;
    
        }
    }
}

console.log(`Total leap years between ${startYear} and ${endYear}: ${LeapYears.length}`);
console.log('Leap years:', LeapYears.join(', '));