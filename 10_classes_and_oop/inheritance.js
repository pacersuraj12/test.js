class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }

}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addcourse()

const masalaChai = new user("masalaChai")
masalaChai.logMe
console.log((chai instanceof user));
