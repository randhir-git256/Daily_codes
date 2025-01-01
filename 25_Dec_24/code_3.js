// check the number whether it is positive negative or zerp

function checkNumber(num) {
    if (isNaN(num)) {
        console.log("Invalid input ");

    } else {
        if (num === 0) {
            console.log("The number is zero");
        } else if (num === Math.abs(num))
        {
            console.log("The number is postive");

        }else {
            console.log("The number is negative");
        }   
    }
}

// calling the function
checkNumber(89);
checkNumber(-73);
checkNumber(-0);