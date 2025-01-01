// check the last digts have same number or not

function haveSameDigit(num1, num2) {
    var lastDigit1 = num1.toString().slice(-1);
    var lastDigit2 = num1.toString().slice(-2);

    return lastDigit1 === lastDigit2;
}

var num1= 134;
var num2 = 222;

var result = haveSameDigit(num1, num2);

console.log(result);