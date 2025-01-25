// simple program to check whether the number is even or odd'

function isEven(n) {
    return (n % 2 == 0);
}

let num = 141;

isEven(num) ? console.log("Even") : console.log("Odd");