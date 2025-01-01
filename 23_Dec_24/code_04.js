// Write a code to find the day which is 150 days earlier from the current date

function subtractDays(date, days) {
    let result = new Date(date); 
    result.setDate(result.getDate() - days); 
    return result;
}

let inputDate = new Date('2024-12-22');
let resultDate = subtractDays(inputDate, 150); 

console.log(resultDate.toDateString()); 

