//  Calautate the age of a person from the given year of birth also catagorized it whether he is teanager or adult

let yearofBirth = 2000 ;

let currentYear = 2025;

function calculateAge(yearofBirth, currentYear){
    let age = currentYear - yearofBirth;
    console.log("The age of the person is " + age);
    if(age < 18){
        console.log("The person is a teenager");
    }else{
        console.log("The person is an adult");
    }
}

calculateAge(yearofBirth, currentYear);
