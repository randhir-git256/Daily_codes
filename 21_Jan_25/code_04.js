// Find the year is leap or not

// formala year should be divisble by 4 && year are not didvible by 100 else year divsible by 400

let year = 1999;

if((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)) {
    console.log(year + " is a leap year")

} else{
    console.log(year + " is not a leap Year. ");
}

