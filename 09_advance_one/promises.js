const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    })
}, 1000).then(function(){
    console.log("async 2 resolved")
})

const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "info@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
console.log(user);

})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "suraj", password: "123"})
        }else{
            reject('ERROR: something went wrong')
        }
        
    }, 1000)
})

promiseFour.then((user)=> {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
console.log(error)
}).finally(()=> console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "javascript", passwordP: "123"})
        }else{
            reject('ERROE: js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
 try{
  const response = await promiseFive
  console.log(response);
 }catch(error){
    console.log(error);
 }
}
    
consumePromiseFive()