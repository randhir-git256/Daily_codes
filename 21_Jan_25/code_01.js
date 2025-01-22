// Write a code to give the Grades to the students according to the there marks 

// 1. the marks is 90-100 then A
// 2. marks is 70 - 89 then B
// 3. marks is 60 - 69 then C
// 4. marks is 40 - 59 then D
// 5. marks is below 40 then F

let grade;
let marks = 55;

if(marks >= 90 && marks <= 100){
    grade = "A";
}
else if(marks >= 70 && marks <= 89){
    grade = "B";
}
else if(marks >= 60 && marks <= 69){
    grade = "C";
}
else if(marks >= 40 && marks <= 59){
    grade = "D";
}
else if(marks >= 0 && marks <= 39){
    grade = "F";
}

console.log("Your marks are " + marks + " " + "and your grade is " + grade)