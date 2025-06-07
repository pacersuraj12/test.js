const user = {
    username: "suraj",
    lognCount: 8,
    signIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`username : ${this.username}`);
        console.log(this);
    }

}
// console.log(user.uesrname);
// console.log(user.getUserDetails());
// // console.log(this); 

function User(username, loginCount, isLoggedIn){
    this.username = username;
this.loginCount = loginCount;
this.isLoggedIn = isLoggedIn;

return this
}
const userOne = new User("pacersuraj",12,true);
const userTwo =  new User("chai or code");
console.log(userOne);
console.log(userTwo);
