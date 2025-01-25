// write a code to print the fibonacci series between 1 to 20

function fibonacciSeries(num){  
    let num1 = 0, 
    num2 = 1, 
    next;
    for (let i = 1; i <= num; i++) {
        console.log(num1);
        next = num1 + num2;
        num1 = num2;
        num2 = next;
    }
    return
}    

fibonacciSeries(20);