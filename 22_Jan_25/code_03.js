// // write the code to draw the star pattern in the downnward left triangle form at left aligned.

let num = 6;
pattern = "";

if (num > 1){
    for(let i =1; i <= num; i++){
        for(let j = 0; j <= (num-i); j++){
            pattern += "* ";
        }

        pattern += "\n";
    }
    console.log(pattern);
} else {
    pattern = "Number should be greater than 1";
}


