class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
    createId(){
        return `123`
    }
}
const suraj = new User("suraj")
// console.log(suraj.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// iphone.logMe();

console.log(iphone.createId());


