// write a code for printing the Multiplication table of various number upto the value 10

function printMultiplicationTable(num) {
    Array.from({ length: 10 }, (_, i) => 
console.log(`${num} * ${i + 1} = ${
    num * (i + 1)}`));
}


printMultiplicationTable(18);