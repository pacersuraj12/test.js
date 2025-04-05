const accountId = 12345 
let accountEmail = "pacersuraj@gmail.com"
var accountPassword = "123456"
accountCity = "jaipur"

// accountId = 11111  

accountEmail = "www@gmail.com"
accountPassword = "33333"
accountCity = "mrt"
console.log("accountId");

/*
prefer not use var 
because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity]);