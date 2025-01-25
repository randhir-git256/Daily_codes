// Print the star pattern in the form of triangle which is left aligned 

let num = 6;
pattern = "";

if (num > 1) {
    for(let i =1; i<=num; i++){
        for(let j =1; j <= i ; j++){
            pattern += "*";
        }
        pattern +="\n";
    }
    console.log(pattern);
}
else{
    pattern = "Number should be greater than 1"
}