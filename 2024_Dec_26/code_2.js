// Generate random multiple numbers 

let min = 20;
let max = 70;
let count = 7;
let random = [];

for (let i = 0; i < count; i++) {
    let n = Math.floor(Math.random() * (max - min + 1)) + min;

    random.push(n);
}

console.log('Random number betn the range:', random);






