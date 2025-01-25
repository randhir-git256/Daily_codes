// write a code to print the prime number between 1 to 20

let start = 1;
let end = 20;

function isPrime(num){
    if(num <= 1){
        return false;
    }

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

for(let i = start; i <= end; i++){
    if(isPrime(i)){
        console.log(i);
    }
}
