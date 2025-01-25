// Subtraction of two arrays 

let array1 = [10, 20, 30];
let array2 = [30, 80, 90];

let diffrences = array1.map((num, index) => num - array2[index]);

console.log(diffrences)