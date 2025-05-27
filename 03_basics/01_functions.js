function sayMyName(){
    console.log("s");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("j");
    
}

// sayMyName()


// function addTwonumber(number1, number2){
// console.log(number1 + number2);
// }

// const result = addTwonumber(5,3)
// console.log("result :", result);

function addTwonumber(number1, number2){  // parameter
// const result = (number1 + number2);
// return result

return number1 + number2
}

 const result = addTwonumber(5,3) // argument 
// console.log("result :", result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log(" please enter a username ");
        
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("suraj"))

// console.log(loginUserMessage())


//******* function with objects *******


function calculaterCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculaterCartPrice(200,400,500,2000))

const user = {
    username: "suraj",
    price:199
}
function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)