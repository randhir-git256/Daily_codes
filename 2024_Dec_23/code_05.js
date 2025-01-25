function createCalculator() {
    let total = 0; 

    return {
        add(value) {
            total += value;
            console.log(`Added ${value}. Total: ${total}`);
            return this; // Return the instance for method chaining
        },
        subtract(value) {
            total -= value;
            console.log(`Subtracted ${value}. Total: ${total}`);
            return this; // Return the instance for method chaining
        },
        getTotal() {
            console.log(`Final Total: ${total}`);
            return total;
        }
    };
}

const calculator = createCalculator();

calculator
    .add(10)        
    .subtract(40)  
    .add(200)      
    .subtract(84)   
    .getTotal();    
