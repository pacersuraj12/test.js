// let myName = "suraj     "

// console.log(myName.trueLength);
  let myHeros = ["thor", "spiderman"];
let heroPower = {
    thor: "hummer",
    spiderman: "sling",
getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`);
    
   }
}

Object.prototype.suraj = function(){
    console.log(`suraj is present in all objects `);
}

Array.prototype.heySuraj = function(){
    console.log(`suraj say hello`);
}

// heroPower.suraj()
// myHeros.suraj()
// myHeros.heySuraj()
// heroPower.heySuraj()

// ************** Inheritance ******************

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideos: true
}

const TeachinngSupport = {
    isAvailable: false
}

const TASupoort = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachinngSupport
}
Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachinngSupport, Teacher)

let anotherUsername = "chaiAurcode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`true length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"suraj".trueLength()
"iceTea".trueLength()