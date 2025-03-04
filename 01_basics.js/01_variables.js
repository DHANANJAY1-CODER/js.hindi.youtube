const accountId = 144553
let accountEmail = "dhananjahykumar@gamil.com"
var accountPassword = "12345"
var accountCity = "jaipur"
let accountState;


//accountId = 2 // not allowed

accountEmail ="dh@gmail.com"
accountPassword = "23232332"
accountCity ="bangalore"


console.log(accountId);
/*
perfer not to use var
becuase of issue in the block scope and functional scope 
*/
console.table([accountId , accountEmail , accountPassword , accountCity, accountState]);