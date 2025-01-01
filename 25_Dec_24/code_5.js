// Find the sum of the natural numbers

function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum = sum + i;
    return sum;
}

const n = 15;
console.log(findSum(n));