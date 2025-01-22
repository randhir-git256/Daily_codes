// calculate the total cost of the items added in the shopping cart 
// First calcaute the price of the items added in the cart
// Apply discount on the basis of the whether it has subscription or not
// if it has subscribed then give 10% else nothing
// if it from  Pune then add 10 rupees for the shipment from reset of maharashtra  then 20 rupees else  25 
// if the mode od payment is online or cashOnDelivery then add 10 extra on the total amount

let cartItems = [
    {
        item: "Mobile",
        price: 20000,
        quantity: 2
    },
    {
        item: "Laptop",
        price: 40000,
        quantity: 1
    },
    {
        item: "Headphones",
        price: 1000,
        quantity: 3

    }
]

let isSubscribed = true;
let location = "Pune";
let paymentMode = "online";

let totalAmount = 0;
let discount = 0;
let shipmentCharge = 0;
let finalPrice = 0;

for (let item of cartItems){
    totalAmount += item.price * item.quantity;
}

console.log("Total Amount is $" + totalAmount);

if(isSubscribed) {
    discount = totalAmount * 0.1;
    console.log("Discount applied 10% on subscribed people $" + discount);
} else{
    console.log("No discount applied.");
}

if(location === "Pune") {
    shippingCharge = 10;
}
else if(location === "Maharashtra & Goa"){
    shipmentCharge = 20;

}else {
    shipmentCharge = 30;
}

if (paymentMode === "online"){
    discount += 100; 
    console.log("Online payment discount applied: -$100");

}
else{
    console.log("No discount on the COD")
}

finalPrice = totalAmount - discount + shipmentCharge;

console.log("Final Price to Pay: $" + finalPrice);