// write a code to draw star apttern code in the right side aligned

// Upward right aligned triangle

let num = 6;
pattern = "";

if (num > 1){
    for(let i =1; i<=num; i++){
        for(let j = 1; j <= (num-i); j++){
            pattern += " ";
        }
        for(let k = 1; k <= i; k++){
            pattern += "*";
        }
        pattern += "\n";

    }
    console.log(pattern);
} else {
    pattern = "Number should be greater than 1";
}

// Downward right aligned triangle

let number = 6;
pattern = "";

if(number > 1){
    for(let i = number; i >=  1; i--){
        for(let j = 1; j<= (number - i); j++){
            pattern += " ";
        }
        for(let k = 1; k<= i; k++){
            pattern += "*";
        }
        pattern += "\n";
    }
    console.log(pattern);
} else {
    pattern = "Number should be greater than 1";
}