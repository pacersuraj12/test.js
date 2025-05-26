// singleton


// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "suraj",
    "full name": "Suraj Tomar",
    [mySym]: "myKey1",
    age: 18,
 location: "baraut",
 email: "pacersuraj@gmailcom",
 isLoggedIn: false,
 lastLoginDays: ["Monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log("name :",JsUser.name);
// console.log(JsUser[mySym]);

// JsUser.email = "surajtomar.com";
// Object.freeze(JsUser);      // its mean lock
// JsUser.email = "tomarsuraj.com";
// console.log(JsUser);

JsUser.greeting = function(){
 console.log("Hello js User ");
}

JsUser.greeting2 = function(){
    console.log(` Hello Js User ,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());