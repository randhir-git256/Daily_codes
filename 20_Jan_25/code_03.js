// Print the data types of the variables from the object of name userinfo 

let userinfo = {
    name :'Randhir',
    age : 25,
    isWorking : true,
    contact: 7776037243,
    married : null,
}

for (let key in userinfo){
    console.log(typeof userinfo[key]);
}
