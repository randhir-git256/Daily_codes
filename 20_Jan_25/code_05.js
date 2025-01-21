// write a code to give final amount after discount

let Amount = 4000;
console.log("The total amount is: " + Amount);

function calculateDiscountedPrice(Amount) {
    let discount = 0;

    if (Amount > 5000){
        discount = 0.15;
    } else if(Amount > 3000){
        discount = 0.10;
    } else if(Amount > 1500){
        discount = 0.05;
    }

    const totalAmount = Amount - (Amount * discount);
    return totalAmount;
}


console.log("Total Amount :", calculateDiscountedPrice(Amount));
