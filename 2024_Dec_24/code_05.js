// FInd the reminder of the through looping of the numbers

const numbers = [10, 15, 20, 25];
const divisor = 6;

numbers.forEach(num => {
    console.log(`Remainder of ${num} divided by ${divisor}: ${num % divisor}`);
});