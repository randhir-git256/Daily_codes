// Create a Program to calutate the more than two numbers using arrow functions

let addNumbers = (() => {
    let total = 0;

    return (number) => {
        total += number;
        console.log(`Current Total: ${total}`);
        return total;
    }

})();

console.log("Add numbers");
addNumbers(10);
addNumbers(20);
addNumbers(5);
addNumbers(88);