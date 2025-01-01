// multiplication of array

function multiplyArrayElements(array) {
    if (!Array.isArray(array) || array.length === 0) {
        
    }

    return array.reduce((product, num) => product * num, 1);
}

const numbers = [2, 3, 4, 5];
const result = multiplyArrayElements(numbers);

console.log("sum of array elements is:", result);
