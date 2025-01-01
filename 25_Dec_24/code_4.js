// Code to convert the postive to negative and negative to postive

function convert_postive(a) {
    if (a < 0) {
        a = a * -1;
    }

    return a;
}

function convert_negative(b) {
    if ( b > 0) {
        b = b * -1; 
    }

    return b;

}

console.log(convert_negative(15));
console.log(convert_postive(-50));