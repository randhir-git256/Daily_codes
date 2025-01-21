// create a code for merging two objects in javascript

let user = {
    appuser_id : 221,
    name: 'Piyush',
    age: 30,
    
    
};
let ordersPlacedDetails ={
    orderDate : '2025-01-25',
    orderAmount : 5000,
    orderItem: 'Mobile',

}

let mergedObject = {...user, ...ordersPlacedDetails};

console.log(mergedObject);

